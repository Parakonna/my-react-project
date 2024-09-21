import style from './FriendListItem.module.css'

const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <div className={style.conteiner}>
          <img className={style.img} src={avatar} alt="Avatar" width="48" />
          <p className={style.name}>{name}</p>
          {isOnline ? <p style={{color: "darkgreen"}}>Online</p> : <p style={{color: "red"}}>Offline</p>}
</div>
  )
}

export default FriendListItem