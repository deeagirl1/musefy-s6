import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Song } from "../../../types";
import { Alert, AlertTitle } from "@mui/material";

interface SongCardProps {
  song: Song;
  onClick: (song: Song) => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, onClick }) => {
  const handlePlay = () => {
    onClick(song);
  };

  const showAlert = (severity: any, message: any) => {
    <Alert severity={severity}>
      <AlertTitle>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </AlertTitle>
      {message}
    </Alert>;
  };

  return (
    <Card sx={{ margin: "0 5px" }}>
      <CardMedia
        component="img"
        height="140"
        image={song.imageLink}
        title={song.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {song.title}
        </Typography>
        <Typography color="text.secondary">{song.artist}</Typography>
        <PlayCircleFilledIcon onClick={handlePlay} />
      </CardContent>
    </Card>
  );
};

export default SongCard;
