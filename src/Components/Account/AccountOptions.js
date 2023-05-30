import React, { useState }from 'react'
import { View } from 'react-native'
import { ListItem, Icon, Text } from 'react-native-elements'
import { map } from 'lodash'
import { Modal } from "../../Components/Shared";
import { ChangeDisplayNameForm } from "./ChangeDisplayNameForm";
import { ChangeEmailForm } from "./ChangeEmailForm";
import { ChangePasswordForm } from "./ChangePasswordForm";


export  function AccountOptions(props) {

    const { onReload } = props;

    const[showModal, setShowModal] = useState(false);
    const[renderModal, setRenderModal] = useState(null);
    const onCloseModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key) => {
    if(key === "displayName"){
        setRenderModal(<ChangeDisplayNameForm onClose={onCloseModal} onReload={onReload}/>);
    }
    if(key === "email"){
        setRenderModal(<ChangeEmailForm onClose={onCloseModal} onReload={onReload}/>);
    }
    if(key === "password"){
        setRenderModal(<ChangePasswordForm onClose={onCloseModal} />);
    }

    onCloseModal();

  };

  const menuOptions = getMenuOptions(selectedComponent);


  return (
    <View>
        {map(menuOptions, (menu, index) => (
            <ListItem key={index} 
                      bottomDivider 
                      onPress={menu.onPress}>
                <Icon type={menu.iconType} 
                      name={menu.iconNameLeft}
                      color={menu.iconColorLeft} />
                <ListItem.Content>
                    <ListItem.Title>
                        {menu.title}
                    </ListItem.Title>
                </ListItem.Content>
                <Icon type={menu.iconType}
                      name={menu.iconNameRight}
                      color={menu.iconColorRright} /> 
            </ListItem>
        ))}
          <Modal show={showModal} close={onCloseModal}>
            {renderModal}
        </Modal>  
    </View>
    
    
    )
}


function getMenuOptions(selectedComponent){
    return [
        {
            title:"Cambiar Nombre y Apellido",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight:"chevron-right",
            iconColorRright:"#ccc",
            onPress: () => selectedComponent("displayName")
        },
        {
            title:"Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight:"chevron-right",
            iconColorRright:"#ccc",
            onPress: () => selectedComponent("email")
        },
        {
            title:"Cambiar Password",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight:"chevron-right",
            iconColorRright:"#ccc",
            onPress: () => selectedComponent("password")
        }

    ]
}