import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { formDataToStore } from "../../redux/actions/postActions";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      cardRoot: {
        marginLeft: "auto",
        marginRight: "auto",
      },
      root: {
        maxWidth: 500,
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
        minWidth: 400,
      },
      textValidator: {
        fontSize: 16,
        fontWeight: "bold",
        minWidth: 500,
      },
      pos: {
        marginBottom: 12,
        fontSize: 12,
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxWidth: 600,
      },
      button: {
        marginTop: 35,
        marginLeft: "70%",
      },
    })
  );
  const [open, setOpen] = React.useState(true);
  const [state, setState] = useState({
    header: "",
    body: "",
  });

  const dispatch = useDispatch();

  const savePost = useCallback(() => {
    dispatch(formDataToStore(state));
  }, [dispatch, state]);

  const handleHeaderChange = (event: any) => {
    const header = event.target.value;
    setState({ header, body });
  };

  const handleBodyChange = (event: any) => {
    console.log("event", event);
    const body = event.target.value;
    console.log(header);
    setState({ header, body });
  };

  const handleSubmit = () => {
    savePost();
    history.push("/");
  };

  useEffect(() => {
    console.log("useEffectInCreatePost");
    axios
      .post("https://simple-blog-api.crew.red/posts", {
        headers: {
          "Content-Type": "testHeader",
        },
        data: {
          title: "In quibusdam tempore odit est dolorem",
          body:
            "Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio",
        },
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  const { header, body } = state;

  const classes = useStyles();

  const history = useHistory();

  const handleClose = () => {
    history.push("/");
    setOpen(false);
  };

  return (
    <Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container className={classes.paper}>
            <ValidatorForm
              // ref="form"
              onSubmit={handleSubmit}
              onError={errors => console.log(errors)}
            >
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                <TextValidator
                  className={classes.textValidator}
                  label="Header"
                  onChange={event => handleHeaderChange(event)}
                  name="header"
                  value={header}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Typography>
              <TextValidator
                className={classes.textValidator}
                label="Body"
                onChange={event => handleBodyChange(event)}
                name="body"
                value={body}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <Typography
                className={classes.button}
                color="textSecondary"
                gutterBottom
              >
                <Button type="submit">Submit</Button>
              </Typography>
            </ValidatorForm>
          </Container>
        </Fade>
      </Modal>
    </Container>
  );
};

export default CreatePost;
