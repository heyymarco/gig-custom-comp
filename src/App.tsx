import styles from './App.module.css'
import {
    default as React,
    useState,
} from 'react';
// import logo from './logo.svg';
import {
    Accordion,
    AccordionItem,
    Button,
    Content,
    DropdownListButton,
    ExclusiveAccordion,
    Group,
    Icon,
    Label,
    ListItem,
    ListSeparatorItem,
    Tab,
    TabPanel,
    Range,
} from '@reusable-ui/components'
import {
    Styles,
    HeadPortal,
} from '@cssfn/cssfn-react'



interface ParagraphLoremProps {
    words? : number
}
const lorems = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem accusantium et ipsam, architecto cupiditate recusandae dolorem itaque tempore expedita commodi eos doloremque molestias. Impedit doloribus maxime rem, iste quia consequuntur?'.split(' ');
const ParagraphLorem = ({ words }: ParagraphLoremProps) => (
    <p>
        { (words ? lorems.slice(0, words) : lorems).join(' ') }
    </p>
);



const SampleDropdown = () => {
    return (
        <DropdownListButton
            theme='primary'
            buttonChildren={
                'Show Menu'
            }
            className={styles.demoDropdown}
        >
            <ListItem>
                A first item
            </ListItem>
            <ListItem>
                A second item
            </ListItem>
            <ListItem className={styles.panelSensivity} actionCtrl={false}>
                <>
                    Sensivity: <Range />
                </>
            </ListItem>
            <ListItem theme='success'>
                Yess
            </ListItem>
            <ListItem theme='danger'>
                Nooo
            </ListItem>
            <ListSeparatorItem />
            <ListItem enabled={false}>
                A disabled item
            </ListItem>
        </DropdownListButton>
    );
}



function App() {
    const [value, setValue] = useState(0);
    const handleTriggerRerender = () => {
        setValue(value + 1);
    };
    
    
    
    return (
        <>
            <HeadPortal>
                <Styles />
            </HeadPortal>
            <Content className={styles.page} theme='primary' gradient>
                <Tab
                    theme='secondary'
                    size='lg'
                    gradient={false}
                    defaultExpandedTabIndex={1}
                    bodyComponent={<Content size='lg' />}
                >
                    <TabPanel label={<h4>React</h4>}>
                        <p>The detail of second item.</p>
                        <ParagraphLorem />
                        <ParagraphLorem />
                    </TabPanel>
                    <TabPanel label={<h4>Custom Components</h4>}>
                        <Accordion theme='primary'>
                            <AccordionItem bodyComponent={<Content className={styles.featurePanel} />} label={<h3><Icon icon='account_tree' /> Composition</h3>} defaultExpanded={true}>
                                <p>
                                    Made up from <code>JSX</code> &amp; <code>props</code> with <em>no</em> / <em>minimal</em> vanilla JS.
                                </p>
                                <p>
                                    No <code>JQuery</code>. Everything is written in <em>react way</em>.
                                </p>
                            </AccordionItem>
                            <AccordionItem bodyComponent={<Content className={styles.featurePanel} />} label={<h3><Icon icon='format_list_bulleted' /> Intellisense Friendly</h3>} defaultExpanded={true}>
                                <p>
                                    Written in <strong>TypeScript</strong>. Useful for <em>VS Code</em> suggestion dropdown &amp; autocomplete.
                                </p>
                            </AccordionItem>
                            <AccordionItem bodyComponent={<Content className={styles.featurePanel} />} label={<h3><Icon icon='color_lens' /> Theme-able</h3>} defaultExpanded={true}>
                                <p style={{display: 'inline'}}>
                                    Contextual theme:
                                </p>
                                <Group style={{display: 'inline-flex', marginInlineStart: '1rem'}}>
                                    <Label theme='primary' mild={false}>Primary</Label>
                                    <Label theme='danger' mild={false}>Danger</Label>
                                    <Label theme='success' mild={false}>Success</Label>
                                    <Label theme='warning' mild={false}>Warning</Label>
                                    <Label theme='dark' mild={false}>Custom 1</Label>
                                    <Label theme='info' mild={false}>Custom 2</Label>
                                </Group>
                            </AccordionItem>
                            <AccordionItem bodyComponent={<Content className={styles.featurePanel} />} label={<h3><Icon icon='tune' /> Customizable</h3>} defaultExpanded={true}>
                                <p>
                                    Using css variables <code>--cust-something: 2em;</code> to customize the component.
                                </p>
                                <p>
                                    No <em>SASS variables</em>, everything are <code>CSS variables</code>.
                                </p>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel label={<h4>Samples</h4>}>
                        <ExclusiveAccordion theme='primary'>
                            <AccordionItem bodyComponent={<Content className={styles.demoPanel} />} label={<code>{'<Dropdown>'}</code>}>
                                <SampleDropdown />
                            </AccordionItem>
                            <AccordionItem bodyComponent={<Content className={styles.demoPanel} />} label={<code>{'<CustomDialog>'}</code>}>
                                <Button gradient>Edit Data</Button>
                            </AccordionItem>
                            <AccordionItem bodyComponent={<Content className={styles.demoPanel} />} label='Test'>
                                <p>test</p>
                            </AccordionItem>
                        </ExclusiveAccordion>
                    </TabPanel>
                    <TabPanel label={<h4>From Figma</h4>}>
                        <p>The detail of third item.</p>
                        <ParagraphLorem />
                        <ParagraphLorem />
                    </TabPanel>
                </Tab>
            </Content>
        </>
    );
}

export default App;