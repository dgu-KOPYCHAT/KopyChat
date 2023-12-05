import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import * as s from "./ShareAssetCSS.js";
import CommentIcon from "../images/comment_icon.png";

const Entire = styled.div`
	width: 95%;
	height: 5vh;
	-webkit-user-drag: none;
	-webkit-user-select: none;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #7f7f7f3f;
	&:hover {
		background-color: #ffffff0f;
		transition: 0.2s;
	}
`;

const LikeAmountDiv = styled.div`
	width: 5%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const LikeAmountText = styled.span`
	color: #3fbf3f;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const CommentDiv = styled.div`
	width: 5%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const CommentImage = styled.img`
	width: min(1.25vw, 2.25vh); /* 1.25vw = 24px, 2.25vh = 24.3px */
	height: min(1.25vw, 2.25vh);
	margin-top: 1.5px;
	margin-right: 5px;
	-webkit-user-drag: none;
	-webkit-user-select: none;
`;

const CommentAmountText = styled.span`
	color: #3fbfbf;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const TitleText = styled.span`
	width: 40%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	text-indent: 0.75vw;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
`;

const WriterText = styled.span`
	width: 20%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	text-align: center;
`;

const CreatedDateText = styled.span`
	width: 30%;
	margin-left: 0.25vw;
	margin-right: 0.25vw;
	color: white;
	font-size: var(--font-size-smmd);
	font-family: var(--font-Default-Light);
	text-align: center;
`;

function PostCard(props) {
	return (
		<Entire>
			<Link
				to="/post"
				style={{
					textDecoration: "none",
					width: "100%",
					height: "5vh",
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<LikeAmountDiv>
					<LikeAmountText>▲ {props.likeAmount}</LikeAmountText>
				</LikeAmountDiv>
				<s.VrLine />
				<CommentDiv>
					<CommentImage src={CommentIcon} />
					<CommentAmountText>{props.commentAmount}</CommentAmountText>
				</CommentDiv>
				<s.VrLine />
				<TitleText>{props.name}</TitleText>
				<s.VrLine />
				<WriterText>{props.writer}</WriterText>
				<s.VrLine />
				<CreatedDateText>{props.createdDate}</CreatedDateText>
			</Link>
		</Entire>
	);
}

PostCard.defaultProps = {
	id: 0,
	name: "글 제목",
	writer: "글쓴이",
	createdDate: "2023-11-11",
	commentAmount: 0,
	likeAmount: 0,
	language: "Java",
};

export default PostCard;
