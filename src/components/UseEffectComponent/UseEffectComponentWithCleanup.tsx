import React, { useEffect, useState } from 'react'

interface avatarI {
  preview: string
}

function UseEffectComponentWithCleanup() {
  const [avatar, setAvatar] = useState<avatarI>()

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview)
  }, [avatar])

  // eslint-disable-next-line
  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }

  return (
    <div
      style={{
        border: '1px solid yellowgreen',
        padding: 10,
        marginTop: 8,
        width: 200,
        height: 200
      }}
    >
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && (
        <img style={{ marginTop: 8 }} src={avatar.preview} alt="" width="80%" />
      )}
    </div>
  )
}

export default UseEffectComponentWithCleanup
