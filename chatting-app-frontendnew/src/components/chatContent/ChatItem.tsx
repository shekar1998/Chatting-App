import { useSelector } from "react-redux";
import Avatar from "../chatList/Avatar";

function ChatItem(props:any) {
  const dark = useSelector((state: any) => state.mode.mode);
    console.log(dark);
    let style: any;
    if (dark) {
      style = {
        background: '#20272e',
      };
    }
    
   return (
    <div
     
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${props.user ? props.user : ""}`}
      >
        <div style={style} className="chat__item__content">
          <div  className="chat__msg">{props.msg}</div>
          <div className="chat__meta">
            <span>{props.time}</span>
            {/* <span>Seen 1.03PM</span> */}
          </div>
        </div>
        <Avatar isOnline="none" image={ props.image} />
      </div>
  )
}

export default ChatItem;