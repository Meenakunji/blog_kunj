import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import style from "./styles";
import HomeBanner from "../../common/HomeBanner";
import { useForm } from "react-hook-form";
import TextField from "../../common/TextField";
import TextArea from "../../common/TextArea";
import { useMutation } from "react-query";
import fetcher from "../../../dataProvider";
import SnackBar from "../../common/Snackbar";
import useRouter from "next/router";

const BlogCreate = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  // create New ArtistEntery
  const { mutate: getCreateBlogContentData } = useMutation(
    (BlogContentDataObj) =>
      fetcher.post(
        `http://localhost:3003/v1/blog/create-blog-content`,
        BlogContentDataObj
      ),
    {
      onSuccess: ({ data }) => {
        setSnackbar({
          show: true,
          status: "success",
          message: "Blog New Entry created successfully.",
        });
        router.push(`/`);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
      },
    }
  );

  const handleCreateBlogContentEntry = () => {
    let BlogContentDataObj = getValues();
    getCreateBlogContentData(BlogContentDataObj);
  };

  return (
    <>
      <HomeBanner />
      <div className="container">
        <div className="row mt-5">
          <Box sx={style.formSection}>
            <h1>Blog Modal</h1>
            <form>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Name"
                    name={"name"}
                    placeholder="Blog Name"
                    register={register}
                    errors={errors}
                  />
                  {errors?.name && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors?.name?.message}
                    </span>
                  )}
                </Box>

                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog Image"
                    name={"image"}
                    placeholder="Blog Name"
                    register={register}
                    errors={errors}
                  />
                  {errors?.image && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors?.image?.message}
                    </span>
                  )}
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog Tag"
                    name={"blogTag"}
                    placeholder="Blog Name"
                    register={register}
                    errors={errors}
                  />
                  {errors?.blogTag && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors?.blogTag?.message}
                    </span>
                  )}
                </Box>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog Title"
                    name={"blogTitle"}
                    placeholder="Blog Title"
                    register={register}
                    errors={errors}
                  />
                  {errors?.blogTitle && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors?.blogTitle?.message}
                    </span>
                  )}
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextArea
                    label="Blog description"
                    name="description"
                    register={register}
                    errors={errors}
                  />
                  {errors.description && (
                    <span
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: "auto",
                        left: "0",
                      }}
                    >
                      {errors.description.message}
                    </span>
                  )}
                </Box>
              </Box>
              <Box sx={style.buttongroup}>
                <Button onClick={() => handleCreateBlogContentEntry()}>
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </div>
        {snackbar.show ? (
          <SnackBar {...snackbar} onClose={setSnackbar} />
        ) : null}
      </div>
    </>
  );
};

export default BlogCreate;
