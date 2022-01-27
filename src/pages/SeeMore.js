/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Data from "../json/SuggestionsBig.json";

function SeeMoreProfiles() {
    const styles = css`
.Main{
    background-color: #fafafa;
}

.suggested{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 100px;
    padding-bottom: 10px; 
    font-weight:600;
    font-size:16px;
}

.suggestions__profile_container{
    width: 30%
}

    .suggestions__profile_main{
        max-width: 100%;
        margin-top:40px;
        margin-left:10px;
        position:fixed;
}

.suggestions__profiles_content{
        display:flex;
        justify-content:space-between;
        position:relative;
        right:50px;
        padding-bottom:8px;
        padding-top:8px;
      }

      .suggestions__profiles_namefollowed{
        display:flex;
        align-items:start;
        flex-direction: column;
        font-size:14px;
        font-weight:600;
        position: relative;
        right:80px;
        // overflow:hidden;
        // text-overflow:ellipsis;
        // white-space:nowrap;
        max-width: 70%;
        span{
          max-width: 100%;
          overflow: hidden;
          white-space:nowrap;
        }
        .suggestions__profiles_followedBy{
          color:#8e8e8e;
          font-weight:400;
          font-size: 12px;
        //   overflow-wrap:break-word;
        //   overflow:hidden;
        //   text-overflow:ellipsis;
          max-width:100px;
        }
      }

      .suggestions__profile_follow{
        position: relative;
        left:80px;
        top:10px;
        // background-color: #0095f6;
        font-size: 12px;
        font-weight:600;
        a{
          text-decoration:none;
          color:#ffffff;
          div{
            background-color: #0095f6;
            padding: 6px 8px 6px 8px;
            border-radius: 5px
          }
         }
      }

      .suggestions__profiles_img{
        position: relative;
        left:50px;
        img{
        border-radius:50%;
      }
    `;

return(
    <main>
    <div className="container" css={styles} style={{ display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column", width: '100%', height: "450px", backgroundColor: "#fff" }}>
        <div className="suggestions__profile_container">
        <div className="suggested">Foreslåede</div>
        {Data.users.map(item => (
          <div key={item.id} >
            <div className="suggestions__profiles_content">
              <div className="suggestions__profiles_img">
                <img src="https://via.placeholder.com/45" alt="Pfp" />
              </div>
              <div className="suggestions__profiles_namefollowed">
                <span><a href="#"><div style={{ maxWidth: '130px', overflowWrap: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>{item.userName}</div></a></span>
                <div className="suggestions__profiles_followedBy">Følges af {item.følgesAf}</div>
              </div>
              <div className="suggestions__profile_follow">
                <a href="#"><div>Følg</div></a>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    </main>
);

}

export default SeeMoreProfiles;