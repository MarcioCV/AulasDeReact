import { Shortcut } from "../../components/Shortcut";
import channelIcon from "../../assets/channels.svg";
import "./style.css";
import { RiCreativeCommonsZeroFill, RiHeartFill } from "@remixicon/react";

export function Home() {
  return (
    <div>
      <div className="homeText">
        <h1>Hello!</h1>
        <p>
          It looks like you still don&apos;t have a collection. Create or import
          one using the ”Create Collections” button below.
        </p>
      </div>
      <Shortcut
        icon={channelIcon}
        title={"Create Collection"}
        text={"Control which paintings are available in which channels"}
        url="/create-collection"
      />

      <RiHeartFill
        size={36} // set custom `width` and `height`
        color="red" // set `fill` color
        className="my-icon size-6" // add custom class name
      />

      <RiCreativeCommonsZeroFill
        size={36}
        className="text-blue-600 bg-yellow-400"
      />
    </div>
  );
}
