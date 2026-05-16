'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const KrEnTypography = ({ children, sx, ...props }: React.ComponentProps<typeof Typography>) => (
    <Typography sx={{ fontSize: '0.9rem', ...sx }} {...props}>
        {children}
    </Typography>
);

export default function AboutMe() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url(/characters_background.png)',
                backgroundPosition: 'center',
                py: 8
            }}
        >
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ my: 4 }}>
                    {/* Spring vibes Section */}
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, mt: 4 }}>
                        Spring vibes ✿ ♡݁｡ᡘ֯ .ܸ ݂ .ܸ ྀི১݂ ✿
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1">
                                진솔함: 진정성 있는 나의 이야기.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                느낌: 어떠한 것을 바라본 시선, 이로 인한 감정, 그것으로부터 시작된 생각.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                같은 공간에서도 서로가 조금씩은 다를 수밖에 없는, 내면의 주관적이고 관념적인 것.
                            </KrEnTypography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1">
                                Sincerity: my authentic story.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                Feeling: the gaze upon something, the resulting emotion, and the thoughts that begin from it.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                The inner, subjective, and conceptual aspects that inevitably vary slightly for everyone, even within the same space.
                            </KrEnTypography>
                        </Grid>
                    </Grid>

                    {/* First - Story Section */}
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, mt: 6 }}>
                        First - Story ໒꒰ྀི ˶•  ݂ •˶ ꒱ྀི১
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1" sx={{ mb: 3 }}>
                                회복과 치유는 계속적으로 내가 해 온 - 이어갈 이야기이다. 예술은 많은 이들에게 다양한 의미를 갖는다. 나에게 있어서 예술은 감정을 움직여주며 누군가를 포용하는 것이면 좋겠다. 내면의 아이와 과거의 경험을 통한 현재의 느낌을 그려내 새로운 공간이 된다. 어쩌면 작업의 동기를 가지고 작업을 진행해 나간다는 것 자체가 의미 있는 예술 활동이다. 주사기라는 설치 작업을 했었을 땐, 이전에 나를 아프게 했던 주사기였지만 이제는 작품을 만들기 위한 하나의 오브제로 변경시키고 그것이 새로운 의미를 갖게 한다고 했었다. 작업으로 가져온 이유는 조금 다를지라도 마치 요셉 코수스가 자신의 기억에 있는 펠트를 가지고 설치 작업을 했던 것처럼 그 물질을 작업으로 가져옴으로써 회복의 의미를 부여하려 했던 것이다.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                병원을 그리는 것도 그랬다. 병원의 공간을 꾸미면서 그려내는 과정이 아픔으로부터의 자유와 그것을 극복했다는 회복과 그로 인한 치유였다. 공간을 구성하여 면을 분할하고 그 안에 밝고 다양한 색채들을 채워 넣는 과정 - 마치 조각 색종이를 맞추는 것처럼 나의 기억 하나하나를 새롭게 밝은 의미로 채워 넣는 표현이기도 했다.
                            </KrEnTypography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1" sx={{ mb: 3 }}>
                                Recovery and healing are the stories I have continuously told—and will continue to tell. Art holds various meanings for many people. To me, I hope art moves emotions and embraces someone. It depicts the inner child and current feelings through past experiences, creating a new space. Perhaps the act of proceeding with work motivated by a purpose is a meaningful artistic activity in itself. When I created an installation art using syringes, I explained that although they were objects that had once caused me pain, I was transforming them into objects for creating art, giving them a new meaning. Although the reason for using them might be slightly different, just as Joseph Kosuth used felt from his memories for installation work, I attempted to imbue the meaning of recovery by bringing that material into my work.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                Painting hospitals was similar. The process of decorating and depicting the hospital space was freedom from pain, a recovery that overcame it, and the resulting healing. The process of constructing the space, dividing the planes, and filling them with bright and diverse colors—like fitting together pieces of colored paper—was also an expression of filling each of my memories with new, bright meanings.
                            </KrEnTypography>
                        </Grid>
                    </Grid>

                    {/* Second - to go Section */}
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, mt: 6 }}>
                        Second - to go ૮꒰ ྀི𓂂•  ̫ •𓂂꒱ა ⌯♡
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1">
                                그 다음에는 치유와 회복의 이미지들을 담기 시작했다. 아이스크림 - 우는 아이들에게 아이스크림 같은 달콤한 간식을 건넸을 때 기분이 나아지고 울음을 그치는 그런 달콤하고 다정한 것들. 그래서 도넛 박스에, 커피 투고 캐리어에, 휘핑크림 위에 담고 놓아 순간의 쉼이 될 수 있길, 저기압된 기분이 한층 밝아질 수 있길 바랐다. 손에서 손으로 전달할 수 있는 것들을 그려 - 마음을 전하고, 위로를 건네려 하는 손길 같은. ♥
                            </KrEnTypography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1">
                                Next, I began to capture images of healing and recovery. Ice cream—like those sweet and affectionate moments when offering sweet snacks to crying children makes them feel better and stop their tears. So, by placing these inside donut boxes, coffee to-go carriers, and on top of whipped cream, I hoped they could become a momentary rest, brightening low spirits. Drawing things that can be passed from hand to hand—like a reaching hand trying to convey my heart and offer comfort. ♥
                            </KrEnTypography>
                        </Grid>
                    </Grid>

                    {/* Saebom kim Section */}
                    <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, mt: 6 }}>
                        Saebom kim ૮꒰ྀི ˶ᵔ ᵕ ᵔ˶ ꒱ྀིა
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                나를 아는 사람들은 그림이 꼭 너 같다고 한다. 내가 그려내는 그림들과 캐릭터들이 나 같다는 말을 듣는 건 진실된 이야기가 통한 것 같아 기분이 좋다. 인위적이지 않고 가식적이지 않은 그런 삶이 자연스러운 것처럼 나를 있는 그대로 담아낸 그림.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                병실의 공간을 재해석해서 그린 그림을 나중에야 본 엄마는 한편으로는 마음 아파했다. 엄마가 되어보니 그때 들은 말의 마음이 이해가 돼 되려 미안했다. 내용을 들여다보기 전 처음 그림을 본 사람들은 밝은 색감에 - 밝고 화사한 느낌을 받는다. 호텔인가? 라는 생각, 같이 놀러 온 방인가? 라는 느낌. 그게 재밌어서 먼저 물어보기를 자처했다. 이거 뭐 같아? 뭐 그린 것 같아?
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                생각해 보면 숨지 않았던 것 같다.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                그리고 아팠다고 해서 힘들다고 해서
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                그만하고 싶었던 것도 아니었다.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                나를 드러냈다기보단 내가 녹아 스며든 작업,
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                그린 - 그림, 그려진 - 그림들.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                그림 앞에서 공간을 느끼고
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                그림에 담은 분위기를 전달 받는 것
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                색감을 물성화한 회화 작업이 가질 수 있는 고유한 회화성
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                그 그림 안으로 들어가 머물러 있을 수 있게하는 끌림.
                            </KrEnTypography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                People who know me say my paintings look just like me. Hearing that the paintings and characters I create resemble me feels good, as if my true story has been conveyed. Just as a life without artificiality or pretense is natural, these are paintings that capture me just as I am.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                My mother, upon later seeing the paintings that reinterpreted the hospital room, felt heartbroken on one hand. Now that I have become a mother, I understand the heart behind those words and feel rather sorry. People who see the paintings for the first time without knowing the context get a bright, radiant feeling from the vibrant colors. &quot;Is it a hotel?&quot; they think, or &quot;Is it a room we came to hang out in?&quot; Finding that amusing, I would take it upon myself to ask first: &quot;What does this look like to you? What do you think I painted?&quot;
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                Thinking back, I don&apos;t think I was hiding.
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                And just because I was sick or struggling
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                Didn&apos;t mean I wanted to stop.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                Rather than revealing myself, these are works where I melted and seeped in,
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                Paintings I drew, paintings that were drawn.
                            </KrEnTypography>
                            <KrEnTypography variant="body1" >
                                Feeling the space in front of the painting
                            </KrEnTypography>
                            <KrEnTypography variant="body1" sx={{ mb: 2 }}>
                                Receiving the atmosphere it holds
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                This is the unique painterly quality that painting, which materializes color, can possess,
                            </KrEnTypography>
                            <KrEnTypography variant="body1">
                                The attraction that allows one to enter into the painting and stay a while.
                            </KrEnTypography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
