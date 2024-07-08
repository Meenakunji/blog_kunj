import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";
import style from "./styles";
import HomeBanner from "../../common/HomeBanner";
import { useForm } from "react-hook-form";
import TextField from "../../common/TextField";
import TextArea from "../../common/TextArea";
import { useMutation } from "react-query";
import fetcher from "../../../dataProvider";
import SnackBar from "../../common/Snackbar";
import { useRouter } from "next/router";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/monokai-sublime.css";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import FileUploader from "../../common/FileUploader";
import { API_BASE_URL, API_GENERATIVE_LANGUAGE_CLIENT } from "../../../constant/appConstants";
import { ErrorMessage } from "../../../lib/ErrorMessage";
import { debounce } from "../../../../utils/common";

const validationRules = {
  name: { required: "Name is required" },
  blogTag: { required: "Blog Tag is required" },
  blogTitle: { required: "Blog Title is required" },
  blogSubTag: { required: "Blog SubTag is required" },
  description: { required: "Description is required" },
};

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("go", go);
hljs.registerLanguage("java", java);

const BlogCreate = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [suggestBlogContent, setSuggestBlogContent] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const codeSnippetRef = useRef(null);

  // for Blog Content suggest
  const { mutate: getSuggestBlogContentBasedOnTitle } = useMutation(
    (suggestBlogTitle) =>
      fetcher.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_GENERATIVE_LANGUAGE_CLIENT}`,
        suggestBlogTitle
      ),
    {
      onSuccess: (data) => {
        console.log("Print suggest title ==>>", data?.candidates?.[0]?.content?.parts?.[0].text);
        setSuggestBlogContent(data?.candidates?.[0]?.content?.parts?.[0].text);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
        setIsSubmitting(false);
      },
    }
  );

  const handleSuggestBlogContent = async (blogtitle) => {
    try {
      const blogsuggestContent = {
        contents: [
          {
            parts: [
              {
                text: blogtitle,
              },
            ],
          },
        ],
      };
      // await getSuggestBlogContentBasedOnTitle(blogsuggestContent);
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedSuggestBlogContent = useCallback(
    debounce((blogtitle) => handleSuggestBlogContent(blogtitle), 1000), // 1 second debounce
    []
  );

  useEffect(() => {
    if (blogTitle) {
      console.log("Debounced suggesting blog content for:", blogTitle);
      debouncedSuggestBlogContent(blogTitle);
    }
  }, [blogTitle, debouncedSuggestBlogContent]);

  useEffect(() => {
    if (codeSnippetRef.current) {
      hljs.highlightElement(codeSnippetRef.current);
    }
  }, []);

  const { mutate: getCreateBlogContentData } = useMutation(
    (BlogContentDataObj) =>
      fetcher.post(`${API_BASE_URL}/v1/blog/create-blog-content`, BlogContentDataObj),
    {
      onSuccess: ({ data }) => {
        setSnackbar({
          show: true,
          status: "success",
          message: "Blog New Entry created successfully.",
        });
        router.push(`/`);
        setIsSubmitting(false);
      },
      onError: (error) => {
        alert(error?.response?.data?.message);
        setIsSubmitting(false);
      },
    }
  );

  const onSubmit = (data) => {
    setIsSubmitting(true);
    let BlogContentDataObj = data;
    const blogSubTags = BlogContentDataObj.blogSubTag.split(",").map((tag) => tag.trim());
    BlogContentDataObj.blogSubTag = blogSubTags;
    BlogContentDataObj.user = "jupiter";
    // BlogContentDataObj.description = suggestBlogContent || blogDescription;
    getCreateBlogContentData(BlogContentDataObj);
  };

  const handleBlogTitleChange = (value) => {
    setBlogTitle(value);
  };

  const handleBlogDescriptionChange = (value) => {
    setBlogDescription(value);
  };

  return (
    <>
      <HomeBanner />
      <div className="container">
        <div className="row mt-5">
          <Box sx={style.formSection}>
            <h1>Blog Modal</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  {/* <FileUploader
                    label="Blog Image Upload (csv) *"
                    name={"image"}
                    placeholder="FIle Upload (csv)"
                    register={register}
                    errors={errors}
                  /> */}
                  <TextField
                    label="Blog Image Url*"
                    name={"image"}
                    placeholder="Blog Image Url*"
                    register={register}
                    errors={errors}
                  />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog Tag"
                    name={"blogTag"}
                    placeholder="Blog Tag"
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
                    // onChange={handleBlogTitleChange}
                  />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextField
                    label="Blog SubTag (Separate by commas)"
                    name={"blogSubTag"}
                    placeholder="Blog SubTag"
                    register={register}
                    errors={errors}
                  />
                </Box>
              </Box>
              <Box sx={style.formRowSection}>
                <Box sx={style.formgroup}>
                  <TextArea
                    label="Blog description"
                    name="description"
                    register={register}
                    errors={errors}
                    // onChange={handleBlogDescriptionChange}
                  />
                </Box>
              </Box>
              <Box sx={style.buttongroup}>
                <Button type="submit" disabled={isSubmitting}>
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </div>
        {snackbar.show && <SnackBar {...snackbar} onClose={setSnackbar} />}
        {errors?.name && <ErrorMessage message={errors.name.message} />}
      </div>
    </>
  );
};

export default BlogCreate;
