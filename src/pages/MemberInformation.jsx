import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '../styles/MemberInformationStyles';
import Arrow from '../assets/arrow.png';
import Set from '../assets/set.png';
import MingleLogo from '../assets/minglelogowhite1.png';
import Pencil from '../assets/pencil.png';

const MemberInformation = () => {
  const [isInvitePopupOpen, setIsInvitePopupOpen] = useState(false);
  const [isGroupPopupOpen, setIsGroupPopupOpen] = useState(false);
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);

  const handleInviteClick = () => {
    setIsInvitePopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsInvitePopupOpen(false);
  };

  const handleGroupClick = () => {
    setIsGroupPopupOpen(true);
  };

  const handleGroupClosePopup = () => {
    setIsGroupPopupOpen(false);
  };

  const handleNameClick = () => {
    setIsNamePopupOpen(true);
  };

  const handleNameClosePopup = () => {
    setIsNamePopupOpen(false);
  };

  const handleCopyCode = () => {
    const groupCode = 'GD88YB';
    navigator.clipboard
      .writeText(groupCode)
      .then(() => {
        alert('그룹코드가 복사되었습니다!');
      })
      .catch(() => {
        alert('코드 복사에 실패했습니다. 다시 시도해주세요.');
      });
  };

  return (
    <M.Container>
      <M.Header>
        <M.Arrow>
          <img id="Arrow" src={Arrow} />
        </M.Arrow>
        <M.Set>
          <img id="Set" src={Set} />
        </M.Set>
      </M.Header>
      <M.Body>
        <M.Logo>
          <img id="MingleLogo" src={MingleLogo} />
        </M.Logo>
        <M.GroupTitle>
          <M.GroupName>
            <p>밍글이</p>
          </M.GroupName>
          <M.Pencil>
            <M.GroupChange onClick={handleGroupClick}>
              <img id="Pencil" src={Pencil} />
            </M.GroupChange>
          </M.Pencil>
        </M.GroupTitle>
        <M.Intimacy>
          <p>알아가는 사이</p>
        </M.Intimacy>
        <M.User>
          <M.Name>
            <M.NickName>
              <p>닉네임</p>
            </M.NickName>
            <M.MemberName>
              <p>수연</p>
            </M.MemberName>
            <M.Change onClick={handleNameClick}>
              <img id="Pencil" src={Pencil} />
            </M.Change>
          </M.Name>
          <M.Id>
            <M.IdTitle>
              <p>아이디</p>
            </M.IdTitle>
            <M.IdInformation>
              <p>limsoo0816</p>
            </M.IdInformation>
          </M.Id>
        </M.User>
        <M.GroupInformation>
          <M.GroupInformation2>그룹 정보</M.GroupInformation2>
          <M.GenderInformation>
            <M.Sex>성별</M.Sex>
            <M.SexInformation>여자</M.SexInformation>
          </M.GenderInformation>
          <M.Age>
            <M.AgeTitle>나이</M.AgeTitle>
            <M.AgeInformation>20대</M.AgeInformation>
          </M.Age>
          <M.Group>
            <M.GroupMember>멤버</M.GroupMember>
            <M.GroupMemberName>수연 슬아</M.GroupMemberName>
            <M.GroupMemberId>limsoo0816 seulah03</M.GroupMemberId>
          </M.Group>
        </M.GroupInformation>
      </M.Body>
      <M.Footer>
        <M.ButtonInvite onClick={handleInviteClick}>초대하기</M.ButtonInvite>
        <M.ButtonLogout onClick={() => console.log('로그아웃 버튼 클릭')}>
          로그아웃
        </M.ButtonLogout>

        {isGroupPopupOpen && (
          <M.GroupPopup>
            <M.GroupPopupName>
              <p>밍글이</p>
            </M.GroupPopupName>
            <M.GroupPopup2>
              <M.GroupCloseButton onClick={handleGroupClosePopup}>
                취소
              </M.GroupCloseButton>
              <M.GroupchangeButton>수정</M.GroupchangeButton>
            </M.GroupPopup2>
          </M.GroupPopup>
        )}

        {isNamePopupOpen && (
          <M.NamePopup>
            <M.NamePopupName>
              <p>수연</p>
            </M.NamePopupName>
            <M.NamePopup2>
              <M.NameCloseButton onClick={handleNameClosePopup}>
                취소
              </M.NameCloseButton>
              <M.NamechangeButton>수정</M.NamechangeButton>
            </M.NamePopup2>
          </M.NamePopup>
        )}

        {isInvitePopupOpen && (
          <M.Popup>
            <M.GroupCode>
              <p>GD88YB</p>
            </M.GroupCode>
            <M.PopupContent>
              <p>그룹코드를 복사해서 친구들을 초대하세요!</p>
            </M.PopupContent>
            <M.CopyButton onClick={handleCopyCode}>코드 복사하기</M.CopyButton>
            <M.CloseButton onClick={handleClosePopup}>완료</M.CloseButton>
          </M.Popup>
        )}
      </M.Footer>
    </M.Container>
  );
};

export default MemberInformation;