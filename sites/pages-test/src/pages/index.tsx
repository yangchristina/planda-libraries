
function Home() {
  const demoItems = [
    {
      id: "",
      label: "",
      content: <></>,
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

      <Box css={{ bc: '$loContrast', height: '100%', marginInline: '150px' }}>
        {
          demoItems.map(item => {
            return (
              <>
                <Section size="3">
                  <Container size="2">
                    <Heading id={item.id} css={{ mb: '$6', scrollMarginTop: '$7' }}>
                      Grid
                    </Heading>
                    <Flex direction="column" align="center" gap="6">
                      <Grid columns="4" align="center" gapX="3" gapY="6">
                        {
                          item.content
                        }
                      </Grid>
                    </Flex>
                  </Container>
                </Section>
                <Flex css={{ jc: 'center' }}>
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
