import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => (
  <>
    <NavBar />
    <Box padding={5}>
      <Outlet />
    </Box>
  </>
);

export default Layout;
