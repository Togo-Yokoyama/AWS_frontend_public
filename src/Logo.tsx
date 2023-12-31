import * as React from "react"
import {
  chakra,
  ImageProps,
  forwardRef,
} from "@chakra-ui/react"
import logo from "./logo.jpg"
export const Logo = forwardRef<ImageProps, "img">((props, ref) => {

  return <chakra.img src={logo} ref={ref} {...props} width={200} height={200} />
})
