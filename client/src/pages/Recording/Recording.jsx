import "./Recording.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Recording() {

  const navigate = useNavigate();

  const [recording, setRecording] = useState(false);
  const [time, setTime] = useState(0);

  const startRecording = () => {
    setRecording(true);
    setTime(0);
  };

  const stopRecording = () => {
    setRecording(false);
  };


  return (
    <div className="recording-page">

      <div className="recording-header">
        <h2>🎤 Audio Recording</h2>
        <p>Record emergency audio evidence</p>
      </div>


      <div className="record-card">

        <div className="mic-circle">
          🎙️
        </div>


        <h3>
          {recording ? "Recording..." : "Ready to Record"}
        </h3>


        <p className="timer">
          ⏱ 00:{time}
        </p>


        <div className="record-buttons">

          {!recording ? (
            <button 
              className="start-btn"
              onClick={startRecording}
            >
              Start Recording
            </button>
          )
          :
          (
            <button 
              className="stop-btn"
              onClick={stopRecording}
            >
              Stop Recording
            </button>
          )}

        </div>

      </div>


      <div className="saved-card">

        <h3>Saved Recordings</h3>


        <div className="audio-item">

          <span>
            🎧 Emergency_audio_01.mp3
          </span>

          <button>
            🗑
          </button>

        </div>


        <div className="audio-item">

          <span>
            🎧 Emergency_audio_02.mp3
          </span>

          <button>
            🗑
          </button>

        </div>


      </div>



      <div className="bottom-nav">

        <span onClick={()=>navigate("/dashboard")}>
          🏠
        </span>

        <span onClick={()=>navigate("/contacts")}>
          👥
        </span>

        <span onClick={()=>navigate("/tracking")}>
          📍
        </span>

        <span onClick={()=>navigate("/history")}>
          🕒
        </span>

        <span className="active">
          🎤
        </span>

      </div>


    </div>
  );
}

export default Recording;