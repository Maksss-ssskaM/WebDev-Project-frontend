import React, { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../../common/contexts/WebsocketContext";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getMessagesList } from "../../store/thunks/messages";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useStyles } from "./style";

export const Index = () => {
  const [value, setValue] = useState("");
  const [message, setMessages] = useState<MessagePayload[]>([]);
  const socket = useContext(WebsocketContext);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  type MessagePayload = {
    content: string;
    msg: string;
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected!");
    });
    socket.on("onMessage", (data: MessagePayload) => {
      console.log("onMessage event received!");
      console.log(data);
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      console.log("Unregistering Events...");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);
  const onSubmit = () => {
    if (value.trim() !== "") {
      socket.emit("newMessage", sessionStorage.getItem("name"), value);
      setValue("");
    }
  };

  const assets = useAppSelector((state) => state.messages.assets.data);
  let messageIndex = 0;

  useEffect(() => {
    dispatch(getMessagesList());
  }, [dispatch]);

  return (
    <Box className={classes.chatBox}>
      <Typography variant="h2" marginTop={2}>
        Online-чат
      </Typography>
      <Box className={classes.chatElement}>
        {assets
          ?.map((message: { username: string; message: string }) => (
            <div key={messageIndex++}>
              <p>
                {`${message.username}: `}
                <span style={{ color: "grey" }}>{message.message}</span>
              </p>
            </div>
          ))
          .slice(-5)}

        {message.map((msg) => (
          <div key={messageIndex++}>
            <p>{msg.content}</p>
          </div>
        ))}
      </Box>
      <Box className={classes.formElement}>
        <TextField
          label="Введите сообщение…"
          sx={{ marginBottom: 2, width: "100%" }}
          value={value}
          onChange={(event: any) => setValue(event.target.value)}
        />
        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={onSubmit}
        >
          Отправить
        </Button>
      </Box>
    </Box>
  );
};
