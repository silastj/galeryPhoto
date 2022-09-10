import styled from "styled-components";

export const PhotoItem = styled.div`
  border-radius:10px;
  width:200px;
  height:200px;
  background-color:#3d3f43;
  padding:10px;
  text-align:center;
  padding-bottom:50px;
  
  img{
    width:100%;
    object-fit:cover;
    max-width:100%;
    height:100%;
    border-radius:10px;
  }

  p{
    color:#fff;
    font-size: 12px;
    text-transform:uppercase;
    padding-top:5px;
  }
`;