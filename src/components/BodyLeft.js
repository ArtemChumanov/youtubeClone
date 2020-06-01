import React, { Fragment } from 'react'
import { Button, Divider, Menu, Label, Icon, ButtonGroup } from 'semantic-ui-react';


const BodyLeft = () => {

  return (
    
    <ButtonGroup vertical fluid>
      <Button fluid >
        <Icon name='home' /> Главная 
      </Button>
      <Button fluid>
        <Icon name='fire' /> В тренде
      </Button>
      <Button fluid>
        <Icon name='mail' />Подписки
      </Button>
      <Divider />
      <Button fluid>
        <Icon name='play circle' />Библиотека
      </Button>
      <Button fluid>
        <Icon name='undo' />История
      </Button>
      <Button fluid>
        <Icon name='mail' />Ваши видео
      </Button>
      <Button fluid>
        <Icon name='clock' />Смореть позже
      </Button>
      <Button fluid>
        <Icon name='like' />Понравившиеся
      </Button>
      <Divider />
      <Label size='large'>
          ПОДПИСКИ
      </Label>
    </ButtonGroup>
    
  )
}

export default BodyLeft;