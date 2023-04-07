import React, { useCallback, useEffect, useMemo, useRef } from "react";
import {
    socket,
    WebsocketContext,
    WebsocketProvider,
} from "../../common/contexts/WebsocketContext";
import { Websocket } from "../../components/websocket/Websocket";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getPopularAssets } from "../../store/thunks/assets";
import { string } from "yup";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";
import AreaChart from "../../components/charts/area-chart";
import TrendUp from "../../assets/images/charts/trend-up.svg";
import TrendDown from "../../assets/images/charts/trend-down.svg";
import LineChart from "../../components/charts/line-chart";
import { IChartData } from "../../common/types/assets";

const Home: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const popularAssetName = useMemo(() => ["bitcoin", "ethereum"], []);
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);

    const fetchData = useCallback(
        (data: string[]) => {
            data.forEach((element: string) => {
                dispatch(getPopularAssets(element));
            });
        },
        [dispatch],
    );

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(popularAssetName);
    }, [popularAssetName, fetchData]);

    const popularAssets: IChartData[] = useAppSelector(
        (state) => state.assets.popularAssets,
    );
    const filteredArray = popularAssets.filter(
        (value, index, self) =>
            index === self.findIndex((t) => t.name === value.name),
    );
    console.log(filteredArray);

    const renderPopularBlock = filteredArray.map((element: any) => {
        const currentPrice = element.singleAsset.map(
            (element: any) => element.current_price,
        );
        const currentCap = element.singleAsset.map(
            (element: any) => element.market_cap,
        );
        const changePrice = element.singleAsset.map(
            (element: any) => element.price_change_percentage_24h,
        );

        return (
            <Grid item xs={12} md={6} lg={6} key={element.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{element.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>
                                ${currentPrice}
                            </h3>
                            <div className={classes.additionalInfo}>
                                <Box
                                    className={
                                        changePrice > 0
                                            ? `${classes.priceTrend} ${classes.trendUp}`
                                            : `${classes.priceTrend} ${classes.trendDown}`
                                    }
                                >
                                    {changePrice > 0 ? (
                                        <img src={TrendUp} alt="TrendUp" />
                                    ) : (
                                        <img src={TrendDown} alt="TrendDown" />
                                    )}
                                    <span>
                                        %{Number(changePrice).toFixed(2)}
                                    </span>
                                </Box>
                                <div className={classes.cardCapitalize}>
                                    ${currentCap}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={element.price_chart_data} />
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {renderPopularBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {/*Проверка на длину filteredArray (не пустой ли массив)*/}
                    {filteredArray.length && <LineChart data={filteredArray} />}
                </Grid>
            </Grid>
        </Box>
        // <WebsocketProvider value={socket}>
        //     <div>
        //         <h1>This is home page</h1>
        //         <Websocket/>
        //     </div>
        // </WebsocketProvider>
    );
};

export default Home;
