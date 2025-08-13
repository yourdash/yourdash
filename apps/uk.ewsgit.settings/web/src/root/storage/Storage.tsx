import { tun, useResource } from "@yourdash/tunnel";
import { useParams } from "react-router";

async function fetchStorageInformation(type: "personal" | "team" | "instance", teamId?: string) {
  switch(type) {
    case "personal":{
      // return tun.send();

      break;
    }
    case "team":{
      // return tun.send();

      break;
    }
    case "instance":{
      // return tun.send();

      break;
    }
    default:
      console.error("An unknown storage type was recieved, doing nothing!")
    break;
  }

  return false;
}

const StoragePage: React.FC<{ type: "personal" | "team" | "instance"}> = ({type}) => {
  const { teamId } = useParams();
  const storageInformation = useResource(() => fetchStorageInformation(type, teamId) || [])

  return <div>
    Storage Page
  </div>
}

export default StoragePage
