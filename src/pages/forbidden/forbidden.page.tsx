import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import { Box, Button, Typography } from "@mui/material";
import style from './forbidden.module.css'
const Forbidden = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Page Forbidden";
    }, []);

    const [animationKey, setAnimationKey] = useState(0);
    const digit1Ref = useRef(null);
    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);

    useEffect(() => {
        const randomNum = () => Math.floor(Math.random() * 9) + 1;
        let time = 30,
            i = 0,
            loop1: NodeJS.Timeout, loop2: NodeJS.Timeout, loop3: NodeJS.Timeout;

        const animateDigit = (selector: any, digit: number) => {
            return setInterval(() => {
                if (i > 100) {
                    clearInterval(selector);
                    selector.current.textContent = digit;
                } else {
                    selector.current.textContent = randomNum();
                    i++;
                }
            }, time);
        };

        loop1 = animateDigit(digit1Ref, 3);
        loop2 = animateDigit(digit2Ref, 0);
        loop3 = animateDigit(digit3Ref, 4);

        return () => {
            clearInterval(loop1);
            clearInterval(loop2);
            clearInterval(loop3);
        };
    }, [animationKey]);

    function onClick() {
        navigate("/");
    }

    const resetAnimation = () => {
        setAnimationKey(prevKey => prevKey + 1);
    };

    useEffect(() => {
        resetAnimation();
    }, []);

    return (
        <Box display="flex" flexDirection="column" textAlign={'center'} alignItems="center" minHeight="100vh" justifyContent={'center'}>
            <div className={style.error}>
                <div className={style.containerError404}>
                    <div className={style.clip}>
                        <div className={style.shadow}><span className={style.digit} ref={digit3Ref}></span></div>
                    </div>
                    <div className={style.clip}>
                        <div className={style.shadow}><span className={style.digit} ref={digit2Ref}></span></div>
                    </div>
                    <div className={style.clip}>
                        <div className={style.shadow}><span className={style.digit} ref={digit1Ref}></span></div>
                    </div>
                    <div className={style.msg}>OH!<span className={style.triangle}></span></div>
                </div>
            </div>

            <Typography className={style.pageTitle} fontWeight={700} variant={'h2'} marginTop={1}>
                Page Forbidden
            </Typography>
            <Typography className={style.secondPageTitle} variant="button" color='#999999' marginTop={2} marginBottom={5}>
                {`We're sorry, the page you requested could not be accessed.`}
            </Typography>
            <Button variant="outlined" color="primary" onClick={onClick}>Return to Home</Button>
        </Box>
    );
}

export default Forbidden;
