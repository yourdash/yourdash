/*DO NOT EDIT THIS FILE; THIS FILE IS AUTO-GENERATED BY "sync-applications.js" IN THE TOOLCHAIN FOLDER*/import React from "react";import { Route, Routes } from "react-router";import Applicationdash from "./apps/dash/index";import Applicationskyblockextras from "./apps/skyblockextras/index";const ApplicationIndex: React.FC = () => {return <Routes><Route path={'dash/*'} element={<Applicationdash/>}/><Route path={'skyblockextras/*'} element={<Applicationskyblockextras/>}/></Routes>};export default ApplicationIndex