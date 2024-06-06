import React from 'react'
import "../App.css"
import AutocompleteTest from '../components/Autocomplete'
import ButtonGroupTest from '../components/ButtonGroup'
import CheckboxTest from '../components/Checkbox'
import RadioButtonsGroupTest from '../components/RadioButtonsGroup'
import FeedbackTest from '../components/Feedback'
import SelectTest from '../components/Select'
import SliderTest from '../components/Sliders'
import SwitchesTest from '../components/Switches'
import TextFieldsTest from '../components/TextField'
import TransferListTest from '../components/TransferList'
import ToggleButtonsTest from '../components/ToggleButtom'
import ImageAvatarsTest from '../components/Avatar'
import BadgeTest from '../components/Badge'
import ListTest from '../components/List'
import TableTest from '../components/Table'
import DialogTest from '../components/Dialog'
import SnackbarTest from '../components/Snackbar'
import AccordionTest from '../components/Accordion'
import AppBarTest from '../components/AppBar'

export default function Componentes() {
  return (
    <div className='App'>
        <header className="App-header">
            <h3>Componentes</h3>
            <AppBarTest></AppBarTest>
            <div className='Divider'/>
            <AutocompleteTest></AutocompleteTest>
            <div className='Divider'/>
            <ButtonGroupTest></ButtonGroupTest>
            <div className='Divider'/>
            <CheckboxTest></CheckboxTest>
            <div className='Divider'/>
            <RadioButtonsGroupTest></RadioButtonsGroupTest>
            <div className='Divider'/>
            <FeedbackTest></FeedbackTest>
            <div className='Divider'/>
            <SelectTest></SelectTest>
            <div className='Divider'/>
            <SliderTest></SliderTest>
            <div className='Divider'/>
            <SwitchesTest></SwitchesTest>
            <div className='Divider'/>
            <TextFieldsTest></TextFieldsTest>
            <div className='Divider'/>
            <TransferListTest></TransferListTest>
            <div className='Divider'/>
            <ToggleButtonsTest></ToggleButtonsTest>
            <div className='Divider'/>
            <ImageAvatarsTest></ImageAvatarsTest>
            <div className='Divider'/>
            <BadgeTest></BadgeTest>
            <div className='Divider'/>
            <ListTest></ListTest>
            <div className='Divider'/>
            <TableTest></TableTest>
            <div className='Divider'/>
            <DialogTest></DialogTest>
            <div className='Divider'/>
            <SnackbarTest></SnackbarTest>
            <div className='Divider'/>
            <AccordionTest></AccordionTest>
            <div className='Divider'/>
        </header>
    </div>
  )
}
