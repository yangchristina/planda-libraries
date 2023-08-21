import { Box, Button, Container, Flex, Grid, Heading, Section, Separator, ThemePanel } from "@radix-ui/themes";
import { AppBar, ContextMenu, DarkThemeButton, Select } from 'design-system/src/lib'
import { vars } from "design-system/src/lib/styles/theme.css";
import { ResetIcon } from '@radix-ui/react-icons'

function Home() {
  const demoItems = [
    {
      id: "contextmenu",
      label: "Context Menu",
      content: <Flex gap={'3'}>
        <ContextMenu units={[{ onSelect: console.log, label: 'Reset panda', rightSlot: <ResetIcon /> }]}>
          <div>Click me</div>
        </ContextMenu>
      </Flex>,
    }, {
      id: 'select',
      label: "Select",
      content: <Flex gap="2">
        <Select
          onChange={console.log}
          data={[{
            type: 'item',
            label: 'min',
            value: 'minute',
          },
          {
            type: 'item',
            label: 'hr',
            value: 'hour',
          },
          {
            type: 'item',
            label: 'days',
            value: 'day',
          }]} />
        <Flex gap="2">
          <Select
            color="primary"
            onChange={console.log}
            data={[{
              type: 'item',
              label: 'min',
              value: 'minute',
            },
            {
              type: 'item',
              label: 'hr',
              value: 'hour',
            },
            {
              type: 'item',
              label: 'days',
              value: 'day',
            }]} />
          <Select
            color="secondary"
            onChange={console.log}
            data={[{
              type: 'item',
              label: 'min',
              value: 'minute',
            },
            {
              type: 'item',
              label: 'hr',
              value: 'hour',
            },
            {
              type: 'item',
              label: 'days',
              value: 'day',
            }]} />
          <Select
            color="hiContrast"
            onChange={console.log}
            data={[{
              type: 'item',
              label: 'min',
              value: 'minute',
            },
            {
              type: 'item',
              label: 'hr',
              value: 'hour',
            },
            {
              type: 'item',
              label: 'days',
              value: 'day',
            }]} />
          <Select
            color="outline"
            onChange={console.log}
            data={[{
              type: 'item',
              label: 'min',
              value: 'minute',
            },
            {
              type: 'item',
              label: 'hr',
              value: 'hour',
            },
            {
              type: 'item',
              label: 'days',
              value: 'day',
            }]} />
        </Flex>
      </Flex>
    }
  ]
  return (
    <Box>
      <DarkThemeButton />
      <ThemePanel />
      <AppBar size="2" color="loContrast" border sticky glass>
        <Button>Button</Button>
      </AppBar>
      {/* #region nav */}
      <Box
        css={{
          position: 'fixed',
          top: '$7',
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          width: 'max-content',
          px: '$6',
          py: '$6',
        }}
      >
        <Heading>My own</Heading>
        <Box as="ul" css={{ p: 0 }}>
          {
            demoItems.map((item) => {
              return <Box key={item.id} css={{ my: '$1' }}>
                <Link href={`#${item.id}`} variant="subtle" css={{ display: 'inline-flex' }}>
                  <Text size="2" css={{ lineHeight: '20px' }}>
                    {item.name}
                  </Text>
                </Link>
              </Box>
            })
          }
        </Box>
      </Box>
      {/* #endregion nav */}

      <Box style={{ backgroundColor: vars.color.loContrast, height: '100%', marginInline: '150px' }}>
        {
          demoItems.map(item => {
            return (
              <>
                <Section size="3">
                  <Container size="2">
                    <Heading mb={'6'} id={item.id} style={{ scrollMarginTop: '$7' }}>
                      {item.label}
                    </Heading>
                    {item.content}
                  </Container>
                </Section>
                <Flex justify={'center'} >
                  <Separator size="2" />
                </Flex>
              </>
            )
          })
        }
      </Box>
    </Box>
  );
}

export default Home;
