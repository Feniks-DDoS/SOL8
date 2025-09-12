import Button from '@/components/Button'

export const metadata = {
  title: '見つかりません',
}

export default () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <Button href="/">ホーム</Button>
    </>
  )
}
