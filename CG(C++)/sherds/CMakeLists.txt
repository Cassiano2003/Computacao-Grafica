cmake_minimum_required(VERSION 3.5.0)
project(shards VERSION 1.0.0)

find_package(OpenGL REQUIRED)

add_executable(shards src/main.c bin/src/glad.c)

target_include_directories(shards PRIVATE lib src/world)

target_link_libraries(shards glfw OpenGL::GL)