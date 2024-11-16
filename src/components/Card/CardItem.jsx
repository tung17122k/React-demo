/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  position: relative;
  width: 400px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .card-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-bottom: 2px solid #f4f4f4;
  }

  .card-content {
    padding: 16px;
    font-family: Arial, sans-serif;

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .card-user {
        display: flex;
        align-items: center;

        .card-avar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #f4f4f4;
          object-fit: cover;
          margin-right: 8px;
        }

        .card-name {
          font-weight: bold;
          font-size: 14px;
          color: #333;
        }
      }

      .card-meta {
        font-size: 14px;
        color: #999;
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      border-top: 1px solid #f4f4f4;
      padding-top: 12px;

      .card-title {
        font-size: 16px;
        font-weight: bold;
        color: #222;
      }

      .card-amount {
        font-size: 14px;
        color: #2c7bf6;
        font-weight: bold;
      }
    }
  }
`;
// @zndrson
//https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1024x768
//256
// 12,000 PSL
// Cosmic Perspective

const CardItem = ({ image, name, avar, amount, meta, title }) => {
  return (
    <StyledCard>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img src={avar} alt="" className="card-avar" />
            <span className="card-name">{name}</span>
          </div>
          <div className="card-meta">
            <span>{meta}</span>
          </div>
        </div>
        <div className="card-footer">
          <span className="card-title">{title}</span>
          <span className="card-amount">{amount}</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default CardItem;
