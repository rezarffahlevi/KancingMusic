import React from "react"
import { ImageStyle } from "react-native"
import FastImage from "react-native-fast-image"
import { Images } from "../assets/"

export const CoverBlank = ({ styles }) => (
  <FastImage source={Images.noPlaylist} style={styles} />
)

export default CoverBlank
