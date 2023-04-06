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

const Home = () => {
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

    const popularAssets: any[] = useAppSelector(
        (state) => state.assets.popularAssets,
    );
    const filteredArray = popularAssets.filter(
        (value, index, self) =>
            index === self.findIndex((t) => t.name === value.name),
    );

    const renderPopularBlock = filteredArray.map((element: any) => {
        const currentPrice = element.data.prices[0];
        const currentCap = element.data.market_caps[0];

        return (
            <Grid item xs={12} md={6} lg={6}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{element.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>
                                ${currentPrice[1].toFixed(2)}
                            </h3>
                            <p className={classes.cardCapitalize}>
                                ${currentCap[1].toFixed(0)}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h5 className={classes.chart}>Chart</h5>
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {renderPopularBlock}
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
