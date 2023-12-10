const PopupView = ({ userName, setShowPopup, data }) => {
  // console.log(data && data[0].user);
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          <h4>
            <span>{userName}</span> User's Posts
          </h4>
          <button onClick={() => setShowPopup(false)}>close</button>
        </div>

        {!data && <p>Loading...</p>}

        {data?.map((post) => (
          <div className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
