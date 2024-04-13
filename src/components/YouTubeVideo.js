import ReactPlayer from "react-player/youtube";

export const YouTubeVideo = () => {
    return (
        <ReactPlayer
            url='https://www.youtube.com/watch?v=dug56u8NN7g'
            playing={true}
            volume={0.5}
        />
    );
}