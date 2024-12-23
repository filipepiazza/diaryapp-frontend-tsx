import { useEffect, useState } from "react";

import { Diary } from "./types";
import { createDiary, getAllDiaries } from "./services/DiariesService";
import axios from "axios";
import Notify from "./components/Notify";

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    initializeDiaries();
  }, []);

  const initializeDiaries = async () => {
    const diaries = await getAllDiaries();
    setDiaries(diaries);
  };

  const notify = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 1000);
  };

  const diaryCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const diaryToAdd = {
      weather,
      visibility,
      date,
      comment,
    };
    try {
      const newDiary = await createDiary(diaryToAdd);
      setDiaries(diaries.concat(newDiary));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        console.error(error.response);
        if (error.response) {
          notify(error.response.data.error[0].message);
        }
      } else {
        console.error(error);
      }
    }

    setDate("");
    setVisibility("");
    setWeather("");
    setComment("");
    setErrorMessage("");
  };

  return (
    <div>
      <Notify errorMessage={errorMessage} />
      <form onSubmit={diaryCreation}>
        date:{" "}
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <div>
          visibility:{" "}
          <div>
            <input
              type="radio"
              id="great"
              name="visibility"
              value="great"
              checked={visibility === "great"}
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label htmlFor="great">Great</label>

            <input
              type="radio"
              id="good"
              name="visibility"
              value="good"
              checked={visibility === "good"}
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label htmlFor="good">Good</label>

            <input
              type="radio"
              id="ok"
              name="visibility"
              value="ok"
              checked={visibility === "ok"}
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label htmlFor="ok">Ok</label>

            <input
              type="radio"
              id="poor"
              name="visibility"
              value="poor"
              checked={visibility === "poor"}
              onChange={(event) => setVisibility(event.target.value)}
            />
            <label htmlFor="poor">Poor</label>
          </div>
        </div>
        <div>
          weather:{" "}
          <div>
            <input
              type="radio"
              id="sunny"
              name="weather"
              value="sunny"
              checked={weather === "sunny"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label htmlFor="sunny">Sunny</label>

            <input
              type="radio"
              id="rainy"
              name="weather"
              value="rainy"
              checked={weather === "rainy"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label htmlFor="rainy">Rainy</label>

            <input
              type="radio"
              id="cloudy"
              name="weather"
              value="cloudy"
              checked={weather === "cloudy"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label htmlFor="cloudy">Cloudy</label>

            <input
              type="radio"
              id="stormy"
              name="weather"
              value="stormy"
              checked={weather === "stormy"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label htmlFor="stormy">Stormy</label>

            <input
              type="radio"
              id="windy"
              name="weather"
              value="windy"
              checked={weather === "windy"}
              onChange={(event) => setWeather(event.target.value)}
            />
            <label htmlFor="windy">Windy</label>
          </div>
        </div>
        comment:{" "}
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {diaries.map((d) => (
          <li key={d.id}>
            {d.date} {d.visibility} {d.weather}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
