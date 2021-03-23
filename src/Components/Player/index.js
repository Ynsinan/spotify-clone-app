import React from "react";
import Slider from "rc-slider";


import {
    Container,
    Current,
    Progress,
    Controls,
    Volume,
    Time,
    ProgressSlider
} from "./style";

import VolumeIcon from "../../svgs/volume.svg";
import ShuffleIcon from "../../svgs/shuffle.svg";
import BackwardIcon from "../../svgs/backward.svg";
import PlayIcon from "../../svgs/play2.svg";
import PauseIcon from "../../svgs/pause.svg";
import ForwardIcon from "../../svgs/forward.svg";
import RepeatIcon from "../../svgs/repeat.svg";

const Player = () => (
    <Container>
        <Current>
            <img src="https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80" alt="Cover" />

            <div>
                <span>Times like these</span>
                <small>Foo Fighters</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button>
                    <img src={ShuffleIcon} alt="Shuffle" />
                </button>
                <button>
                    <img src={BackwardIcon} alt="Backward" />
                </button>
                <button>
                    <img src={PlayIcon} alt="Play" />
                </button>
                <button>
                    <img src={ForwardIcon} alt="Forward" />
                </button>
                <button>
                    <img src={RepeatIcon} alt="Repeat" />
                </button>
            </Controls>
            <Time>
                <span>1:39</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: "#404040", borderRadius: 10 }}
                        trackStyle={{ background: "#1ed760" }}
                        handleStyle={{ border: 0 }}
                    />
                </ProgressSlider>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="Volume" />
            <Slider
                railStyle={{ background: "#404040", borderRadius: 10 }}
                trackStyle={{ background: "#fff" }}
                handleStyle={{ display: "none" }}
                value={50}
            />
        </Volume>
    </Container>
);

export default Player;
