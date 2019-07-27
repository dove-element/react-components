import React from 'react';
import './App.scss';
import Button from './Components/Common/Button/Button';
import PrimaryButton from './Components/Common/PrimaryButton/PrimaryButton';
import IconButton from './Components/Common/IconButton/IconButton';
import PrimaryIconButton from './Components/Common/PrimaryIconButton/PrimaryIconButton';
import Icon from './Components/Common/Icon/Icon';
import { availableIcons } from './Components/Common/Icon/iconHelper';
import Input from './Components/Common/Input/Input';

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <section id="input">
        <Input placeholder="Input..." />
        <Input size="small" placeholder="small Input..." />
        <Input size="large" placeholder="large Input..." />
        <Input disabled />
        <Input type="email" name="email" value="test@test.com" />
        <Input type="password" name="password" value="aaaaaaaa" />
      </section>
      <section className="icons">
        <h2>Icons</h2>
        {availableIcons.map(icon => {
          return (
            <div key={icon}>
              <label>{icon}</label>
              <Icon icon={icon} />
            </div>
          );
        })}
        <div>
          <label>rotate</label>
          <Icon icon="compass" style={{ animationDuration: '5s' }} rotate />
        </div>
      </section>
      <h2>Button</h2>
      <section id="button">
        <Button onClick={() => alert('button clicked!')}>
          Button as button
        </Button>
        <Button as="a" href="/#button">
          Button as anchor
        </Button>
        <Button as="div">Button as div</Button>
        <Button size={'small'}>small Button</Button>
        <Button size={'large'}>large Button</Button>
        <Button className={'custom-class'}>custom class Button</Button>
        <Button style={{ color: 'red' }}>custom style Button</Button>
        <Button disabled>custom style Button</Button>
      </section>
      <section>
        <h2 id="primaryButton">PrimaryButton</h2>
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <PrimaryButton as="a" href="#primaryButton">
          PrimaryButton as anchor
        </PrimaryButton>
        <PrimaryButton size="small">small PrimaryButton</PrimaryButton>
        <PrimaryButton size="large">large PrimaryButton</PrimaryButton>
      </section>
      <section>
        <h2>IconButton</h2>
        <IconButton icon="compass">IconButton</IconButton>
        <IconButton icon="compass" size={'small'}>
          small IconButton
        </IconButton>
        <IconButton icon="compass" size={'large'}>
          large IconButton
        </IconButton>
      </section>
      <section>
        <h2>PrimaryIconButton</h2>
        <PrimaryIconButton icon="plane">PrimaryIconButton</PrimaryIconButton>
        <PrimaryIconButton icon="plane" size="small">
          small PrimaryIconButton
        </PrimaryIconButton>
        <PrimaryIconButton icon="plane" size="large">
          large PrimaryIconButton
        </PrimaryIconButton>
        <PrimaryIconButton
          disabled
          as="a"
          icon="compass"
          href="#primaryIconButton"
        >
          PrimaryIconButton as anchor
        </PrimaryIconButton>
      </section>
    </div>
  );
}

export default App;
