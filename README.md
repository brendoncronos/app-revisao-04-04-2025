# app-revisao-04-04-2025

## Revisão (React Native)

> O Expo é um framework open-source e uma plataforma para aplicativos React universais. É um conjunto de ferramentas e serviços criados em torno de plataformas React Native e nativas para ajudar desde o desenvolvimento até atualizações Over The Air (OTA) e a geração do .apk, .aab e .ipa para que você possa colocar seu app nas lojas Play Store e App Store.

O Expo permite o desenvolvimento de aplicativos iOS, Android e web a partir da mesma base de código JavaScript / TypeScript.

Utiliza-se para criar uma aplicação React Native: **Client Nativo** ou **Expo**.

O expo é uma biblioteca que auxilia a criar mais rápido uma aplicação em react native

Para utilizar bibliotecas com o expo é necessário ter algum plugin de adaptação

Com o Expo

### Bare Workflow x Managed Workflow

> Com o fluxo de trabalho gerenciado (Managed Workflow), você apenas escreve JavaScript / TypeScript e as ferramentas e serviços Expo cuidam de todo o resto para você.

> No fluxo de trabalho simples (Bare Workflow), você tem controle total sobre todos os aspectos do projeto nativo, e as ferramentas e serviços do Expo são um pouco mais limitados.

Com o bare workflow você desconecta do expo

## Começando com o projeto Expo

- `npx create-expo-app <. ou nome do projeto>`: criar uma aplicativo react native com expo. Pode ser utilizado `-t` para colocar um template padrão (NPX é utilizado para baixar e jogar fora no NPM)

## Como funciona o expo

É utilizado componentes para montar partes da interface, o componente é uma função que retorna um JSX ou TSX (com typescript)

```tsx
export default function App() {
  return (
    <View style={styles.container}> <!-- TSX or JSX --> 
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

## Fontes

- https://pt.stackoverflow.com/questions/298637/quais-as-reais-diferen%C3%A7as-em-criar-um-projeto-com-expo-e-sem-expo
- https://reactnative.dev/docs/environment-setup

