import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
const TeamCard = ({ member }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={member.image}
        alt={member.name}
        sx={{
          height: 250,
          borderRadius: "8px 8px 0 0",
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {member.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {member.role}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
