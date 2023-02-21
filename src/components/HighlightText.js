import React from 'react';
/**
 * text와 text에 포함된 target을 읽어
 * target에 span 태그를 붙여서 반환합니다.
 * @param {string} text
 * @param {string} target
 * @returns
 */
//개행 문자를 고려하지 않고 반환할 수 있도록 수정 필요
const HighlightText = ({ text, target }) => {
  const parts = text.split(new RegExp(`(${target})`, 'gim'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === target.toLowerCase() ? <span key={index}>{part}</span> : part,
      )}
    </>
  );
};

export default HighlightText;
