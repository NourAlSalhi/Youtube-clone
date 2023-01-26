import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = (props) => {
    if (!props.videos?.length) return <Loader />;
    // console.log(props.videos)
    return (
        <Stack direction={props.direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {props.videos.map((item,index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;