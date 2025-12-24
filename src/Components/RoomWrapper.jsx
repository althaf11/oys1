import { useParams } from "react-router-dom";
import Room from "./Room";

const RoomWrapper = () => {
  const { feature } = useParams();
  return <Room feature={feature} />;
};

export default RoomWrapper;
