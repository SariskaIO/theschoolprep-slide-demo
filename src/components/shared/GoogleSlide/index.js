import React, {memo} from 'react';
import {getSharedDocumentIframeUrl} from "../../../utils";
import { Box } from '@material-ui/core';
import ReactGoogleSlides from 'react-google-slides';

const GoogleSlide = ({ conference, height, width, isVisible }) => {
    const src = getSharedDocumentIframeUrl(conference);
    return (
        <Box id="googleSlide" frameBorder="0"  style={{background: "#ffffff", display: isVisible ? "block": "none"}} height={height} width={width} src={src}>
            <ReactGoogleSlides
                width={width}
                height={height}
                slidesLink="https://docs.google.com/presentation/d/1uG2bNx9FdDAY36iGcdRR1-sOo5QgsFPTP6um8ufy7WE/edit#slide=id.p"
            //    slideDuration={5}
                position={1}
                showControls
                loop
                />
        </Box>
    );
};

export default memo(GoogleSlide);
