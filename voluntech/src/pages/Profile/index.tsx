import { useAuth } from "../../contexts/AuthContext";
import { Paper, Text, Title } from "../../styles/global";
import { ProfilePicture } from "../../components/ProfilePicture";

import {
  DescriptionArea,
  FooterArea,
  HeaderText,
  LocationArea,
  LogoutIcon,
  LogoutLink,
  PinIcon,
  ProfileHeader,
} from "./styles";
import { Divider } from "../../components/Divider";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";

import Image from "../../assets/profile-pictures/voluntech.png";
import { Link } from "react-router-dom";

function Profile(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const { user, logout } = useAuth();

  // DESCOMENTAR CÓDIGO ABAIXO PARA RODAR APLICAÇÃO COM BACKEND
  // const [address, setAddress] = useState<AddressInterface>();
  // async function getAddress() {
  //   try {
  //     setLoading(true);
  //     if (user?._id) {
  //       let response = await getUserAddress(user?._id);
  //       const { address } = response.data;
  //       setAddress(address);
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getAddress();
  // }, []);

  const [address, setAddress] = useState<AddressInterface>({
    id: "1",
    city: "Charqueadas",
    state: "RS",
  });

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProfileHeader>
            {user?.profilePicture ? (
              // DESCOMENTAR LINHAS ABAIXO
              // <ProfilePicture
              //   src={`${process.env.REACT_APP_CLOUDINARY_URL}${user.profilePicture.publicId}`}
              // />

              // COMENTAR LINHA ABAIXO
              <ProfilePicture src={user.profilePicture.publicId} />
            ) : (
              <ProfilePicture />
            )}
            <HeaderText>
              <Title>{user?.name}</Title>
              <Text>
                {user?.role} {user && "cause" in user && `| ${user.cause}`}
              </Text>
            </HeaderText>
          </ProfileHeader>
          <DescriptionArea>
            <Divider />
            {user && "description" in user && <Text>{user.description}</Text>}
            <FooterArea>
              <LocationArea>
                <PinIcon />
                <Text>
                  {address?.city}, {address?.state}
                </Text>
              </LocationArea>
              <LogoutLink to="/login" onClick={logout}>
                <LogoutIcon />
                Sair
              </LogoutLink>{" "}
            </FooterArea>
          </DescriptionArea>
        </>
      )}
    </Paper>
  );
}

export default Profile;
