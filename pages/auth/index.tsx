import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { Alert, Box, Button, Grid, InputLabel, Snackbar, TextField } from "@mui/material"
import { css } from "@emotion/react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../../components/storage/firebase"
import { FirebaseApp, getApp } from "firebase/app"
import { useAuthContext } from "../../components/firebase/auth/authContext"



const Signup = () => {
  const app: FirebaseApp = getApp()
  const router = useRouter()
  const { user } = useAuthContext()
  const auth = getAuth(app)
  const isLoggedIn = !!user
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password)
    router.push("/")
  }
  const handleClose = async () => {
    await router.push("/")
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  return (
    <Grid container
      alignItems={'center'}
      justifyContent={'center'}
      direction={'column'}
      spacing={10}
    >
      <Snackbar
        open={isLoggedIn}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        key={"top" + "center"}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning">
          すでにログインしています
        </Alert>
      </Snackbar>
      <Grid item>
        <h2>ユーザー登録</h2>
      </Grid>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid container
            alignItems={'center'}
            justifyContent={'center'}
            direction={'column'}
            spacing={5}
          >
            <Grid item>
              <TextField
                id="email"
                name="email"
                label="email"
                type="email"
                autoComplete="current-email"
              />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                name="password"
                label="password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="outlined">
                登録
              </Button>
            </Grid>
            <Grid item>
            <Link href={"/login"}>
              <a>すでに登録している人はこちら</a>
            </Link>
          </Grid>

          </Grid>

        </form>

      </Grid >
    </Grid >
  )
}

export default Signup