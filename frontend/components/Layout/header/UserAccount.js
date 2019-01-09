import React, { Component } from "react";
import Link from "next/link";
import styled from 'styled-components';
import SignOut from "../../SignOut";
import { relative } from "path";

const SignOutWrapper = styled.div`
    position: relative;
`;

class UserAccount extends Component {
	state = {
		focused: false
	};
	setFocus = focused => {
		this.setState({
			focused
		});
	};
	_handleMouseEnter = () => {
		this.setFocus(true);
	};
	_handleMouseLeave = () => {
		this.setFocus(false);
	};
	render() {
		return (
			<SignOutWrapper
				onMouseEnter={this._handleMouseEnter}
				onMouseLeave={this._handleMouseLeave}
			>
				<Link href="/me">
					<a>Account</a>
				</Link>
				{this.state.focused && <SignOut />}
			</SignOutWrapper>
		);
	}
}

export default UserAccount;
