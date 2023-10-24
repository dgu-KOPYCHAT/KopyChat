import React, { useState, useRef } from "react";
import * as c from "./ParagraphExampleCSS.js";
import CopyImage from "../images/copy_icon.png";

const ParagraphExample = (props) => {
	const [showBalloonL, setShowBalloonL] = useState(false); // balloon = 말풍선
	const [showBalloonR, setShowBalloonR] = useState(false); // balloon = 말풍선
	const [balloonKey, setBalloonKey] = useState(0); // 말풍선의 key를 저장하기 위한 state
	const timerRef = useRef(null); // 현재 실행 중인 setTimeout의 ID를 기억하기 위한 ref

	const CopyClipBoardL = (text) => {
		try {
			navigator.clipboard.writeText(text);

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			setShowBalloonL(false);
			setBalloonKey((prevKey) => prevKey + 1); // 말풍선의 key를 증가시켜 새로운 요소로 대체

			setTimeout(() => {
				setShowBalloonL(true);

				timerRef.current = setTimeout(() => {
					setShowBalloonL(false);
				}, 2000);
			});
		} catch (error) {
			alert("클립보드 복사에 실패하였습니다.");
		}
	};

	const CopyClipBoardR = (text) => {
		try {
			navigator.clipboard.writeText(text);

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			setShowBalloonR(false);
			setBalloonKey((prevKey) => prevKey + 1); // 말풍선의 key를 증가시켜 새로운 요소로 대체

			setTimeout(() => {
				setShowBalloonR(true);

				timerRef.current = setTimeout(() => {
					setShowBalloonR(false);
				}, 2000);
			});
		} catch (error) {
			alert("클립보드 복사에 실패하였습니다.");
		}
	};

	return (
		<c.Entire>
			<c.SubEntire>
				<c.Paragraph>
					<c.ParagraphTitleDiv>
						<c.ParagraphTitleText>예제 입력</c.ParagraphTitleText>
						<c.Image
							src={CopyImage}
							onClick={() => CopyClipBoardL(props.contentInput)}
						/>
						{showBalloonL && (
							<c.CopyMessageDiv>
								<c.CopyMessageText>
									복사 완료!
								</c.CopyMessageText>
							</c.CopyMessageDiv>
						)}
					</c.ParagraphTitleDiv>
					<c.ParagraphContentDiv>
						<c.ParagraphContentText disabled={"true"}>
							{props.contentInput}
						</c.ParagraphContentText>
					</c.ParagraphContentDiv>
				</c.Paragraph>
				<c.Paragraph>
					<c.ParagraphTitleDiv>
						<c.ParagraphTitleText>예제 출력</c.ParagraphTitleText>
						<c.Image
							src={CopyImage}
							onClick={() => CopyClipBoardR(props.contentInput)}
						/>
						{showBalloonR && (
							<c.CopyMessageDiv>
								<c.CopyMessageText>
									복사 완료!
								</c.CopyMessageText>
							</c.CopyMessageDiv>
						)}
					</c.ParagraphTitleDiv>
					<c.ParagraphContentDiv>
						<c.ParagraphContentText disabled={"true"}>
							{props.contentOutput}
						</c.ParagraphContentText>
					</c.ParagraphContentDiv>
				</c.Paragraph>
			</c.SubEntire>
			<c.HrLine />
		</c.Entire>
	);
};

export default ParagraphExample;
