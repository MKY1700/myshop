import styles from "./sign.module.css"
import { TextField, Fade, Button } from "@mui/material"
import { use, useState } from "react";

export default function Sign() {
    const [idValue, setIdvalue] = useState("");
    const [pwValue, setPwValue] = useState("");
    const [userNameValue, setUserNameValue] = useState("");
    const [pwCheckValue, setPwCheckValue] = useState("")
    const [showPwFiled, setShowPwFiled] = useState(false);
    const [showPwCheckFiled, setShowPWCheckFiled] = useState(true);

    const [helperText, setHelpText] = useState("6-12자 이내 영문, 숫자 사용가능");
    const [pwHelpText, setPwHelpText] = useState("8-16자 이내 영문, 숫자, 특수문자 사용가능");
    const [pwCheckHelpText, setPwCheckHelpText] = useState("");

    const [idError, setidError] = useState(false);
    const [pwError, setPwError] = useState(false);
    const [pwCheckError, setPwCheckError] = useState(false);

    const handleIdChange = (event) => {
        const value = event.target.value;
        setIdvalue(value);

        const regexId = /^[a-zA-Z0-9]{6,12}$/;
        if (regexId.test(value)) {
            console.log("유효한 ID입니다")
            setHelpText("사용 가능한 ID입니다.")
            setidError(false)
            setShowPwFiled(true);
        } else {
            console.log("유효하지 않습니다")
            setHelpText("유효하지 않은 ID입니다. 6-12자 이내 영문, 숫자 사용가능")
            setidError(true)
            setShowPwFiled(false);
        }
    };

    const handlePwChange = (event) => {
        const value = event.target.value;
        setPwValue(value);
        const regexPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        if (regexPw.test(value)) {
            setShowPWCheckFiled(true);
            setPwError(false);
            setPwHelpText("사용가능한 PW 입니다.")
        } else {
            setShowPWCheckFiled(false);
            setPwError(true);
            setPwHelpText("비밀번호는 8~16자 이내 영문, 숫자, 특수문자를 포함해야 합니다.")
        }
    };

    const handlePwCheckChange = (event) => {
        const value = event.target.value;
        setPwCheckValue(value);

        if (pwValue == value) {
            setPwCheckError(false)
            setPwCheckHelpText("비밀번호가 일치합니다.")
        } else {
            setPwCheckError(true)
            setPwCheckHelpText("비밀번호가 일치하지 않습니다.")
        }
    }
    const handleUserNameChange = (event) => {
        const value = event.target.value
        if (value.length > -1) {
            setUserNameValue(value);
        }
    }
    const handleSubmit = () => {
        if(!idError && !pwError && !pwCheckError && !userNameValue > 0 && idValue,length > 0) {
            alert("회원가입 완료")
        } else {
            alert("모든 입력란을 올바르게 채워주세요.")
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.head}>회원가입</h2>
                <div className={styles.form}>
                    <TextField
                        id="username-required"
                        label="Username"
                        placeholder="닉네임"
                        helperText="사용하실 닉네임을 입력해주세요."
                        value={userNameValue}
                        onChange={handleUserNameChange}
                        fullWidth
                    ></TextField>
                    <TextField
                        error={idError}
                        id="id-required"
                        label="ID"
                        placeholder="ID"
                        helperText={helperText}
                        fullWidth
                        value={idValue}
                        onChange={handleIdChange}
                    ></TextField>
                    {showPwFiled && (
                        <Fade in={showPwFiled} timeout={500}>
                            <TextField
                                error={pwError}
                                id="password-required"
                                label="Password"
                                type="password"
                                placeholder="Password"
                                helperText={pwHelpText}
                                value={pwValue}
                                onChange={handlePwChange}
                                fullWidth
                            ></TextField>
                        </Fade>
                    )}
                    {showPwCheckFiled && (
                        <Fade in={showPwCheckFiled} timeout={500}>
                            <TextField
                                error={pwCheckError}
                                id="password-match"
                                label="Password 재확인"
                                type="password"
                                placeholder="Password 다시 입력"
                                helperText={pwCheckHelpText}
                                value={pwCheckValue}
                                onChange={handlePwCheckChange}
                                fullWidth
                            ></TextField>
                        </Fade>
                    )}
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        style={{marginTop : '20px', width : "250px"}}
                    >Continued</Button>
                </div>
            </div>
        </>
    )
}