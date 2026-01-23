'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" gutterBottom>
        About Spring
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          As a child, I struggled with severe health issues that frequently confined me to the hospital. While my physical world was limited by pain, my creative world was not; art became the one interest I never had to give up.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          I majored in Fine Arts at Dankook University. During my studies, I felt a compelling need to process the strong emotions of my youth, and I began incorporating medical themes and hospital imagery into my work. Through this process, I discovered that art was not just a hobby, but a pathway to recovery. I graduated with a focus on "Healing" and "Recovery"—themes that remain central to my practice today.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Driven to understand the therapeutic power of creativity, I earned a Master’s degree in Art Education at the Graduate School of Hongik University. While there, I worked with children at a welfare center, witnessing firsthand how art could encourage and heal not only the students but the teacher as well.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          In 2015, I relocated to the United States with my family. The past decade has been a period of significant transition, adapting to a new culture and language while raising my children. Throughout this time, I maintained my artistic practice in my home studio, using small canvases and sketchbooks to keep my creative voice alive.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Today, having established my life in the US, I am fully focused on my career as a professional artist. I am eager to exhibit my work in galleries and share my enduring message of hope and healing with a wider audience.
        </Typography>

        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
            Education
          </Typography>
          <Typography variant="body1">
            • <strong>Master of Art Education</strong>, Graduate School of Hongik University
          </Typography>
          <Typography variant="body1">
            • <strong>Bachelor of Fine Arts</strong>, Dankook University
          </Typography>
        </Box>

        <Box sx={{ my: 6, borderTop: '1px solid', borderColor: 'divider' }} />

        <Typography variant="body1" sx={{ mb: 2 }}>
          어린 시절, 저는 병원에서 자주 시간을 보내야 할 만큼 심각한 건강 문제로 고생했습니다. 고통으로 인해 저의 육체적인 세상은 제한되었지만, 창의적인 세상은 그렇지 않았습니다. 예술은 제가 결코 포기할 필요가 없었던 유일한 즐거움이었습니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          단국대학교 미술대학에서 서양화를 전공했습니다. 대학 재학 중, 어린 시절의 강렬한 감정들을 표현하고 싶은 강한 욕구를 느꼈고, 병원과 관련된 주제들을 작품에 담기 시작했습니다. 이 과정을 통해 예술이 단지 취미가 아니라 회복으로 가는 길임을 깨달았습니다. 저는 "치유"와 "회복"이라는 주제에 집중하여 졸업했으며, 이는 오늘날까지 제 작품 세계의 중심이 되고 있습니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          창의력의 치유적 힘을 이해하고자 홍익대학교 교육대학원에서 미술교육 석사 학위를 취득했습니다. 대학원 재학 시절, 복지관에서 아이들을 가르치며 미술이 학생뿐만 아니라 교사 스스로에게도 격려와 치유가 될 수 있음을 직접 경험했습니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          2015년, 가족과 함께 미국으로 이주했습니다. 지난 10년은 새로운 문화와 언어에 적응하며 아이들을 키우는 중요한 변화의 시기였습니다. 이 기간 동안에도 저는 집 안의 작은 스튜디오에서 스케치북과 작은 캔버스에 그림을 그리며 창작 활동을 이어왔습니다.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          이제 미국에서의 삶에 정착한 저는 전문 작가로서의 경력에 온전히 집중하고 있습니다. 갤러리 전시를 통해 저의 작품을 선보이고, 예술을 통한 희망과 치유의 메시지를 더 많은 분들과 나누고 싶습니다.
        </Typography>

        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium' }}>
            학력
          </Typography>
          <Typography variant="body1">
            • <strong>홍익대학교 대학원</strong> 미술교육전공 석사 졸업
          </Typography>
          <Typography variant="body1">
            • <strong>단국대학교 예술대학</strong> 서양화과 졸업
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
