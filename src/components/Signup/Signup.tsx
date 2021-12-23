import React, { useState } from "react";
import { Movie } from "../../models/Movie";
import { Theme } from "../../models/Theme";
import styles from "./Signup.module.css";

export interface SignupProps {
    theme: Theme;
}

//TODO: Move to LocalStorage
const tempMovies: Movie[] = [
    { title: "Fatherhood", time: "18:00:00" },
    { title: "Spiderman", time: "18:00:00" },
    { title: "Lacasa De Papel 5", time: "20:00:00" },
]

export const Signup: React.FunctionComponent<SignupProps> = props => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');


    return (
        <div className={styles.FormWrapper}>
            {firstname}
            <form action="#">
                <input type="text" name="firstname" value={firstname} onChange={e => { setFirstname(e.target.value) }} />
                <input type="text" name="lastname" value={lastname} onChange={e => { setLastname(e.target.value) }} />
                <select name="" id="">
                    {
                        tempMovies.map((movie: Movie, index) => {
                            return <option value={movie.title} key={index}>{movie.title} - {movie.time}</option>
                        })
                    }
                </select>
            </form>
        </div>
    );
};
