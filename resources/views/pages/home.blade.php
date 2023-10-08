@extends('layouts.default-layout')

@push('styles')
    @vite('resources/css/pages/home-page.scss')
@endpush

@push('scripts')
    @vite('resources/js/pages/home-page.js')
@endpush

@section('content')
    <section id="hero" class="hero dark-side yellow-dots-after">
        <div class="name">
            <h1 class="magic-text">Andrew Stseniayev</h1>
            <span>Software Engineer</span>
        </div>
    </section>

    <?php /**
    <section id="technologies" class="technologies light-side">
    <div class="label">
    <h2 class="magic-text">Technologies</h2>
    </div>

    <div class="wrapper">
    <div class="left-line"></div>

    <div class="explanation">

    </div>
    </div>
    </section>

    <section id="projects" class="projects dark-side yellow-dots-before-after">
    <div class="label">
    <h2 class="magic-text">Commercial Projects</h2>
    </div>
    </section>
     */ ?>

    <?php /*
<section id="" class="pet light-side">
    <div class="label">
        <h2 class="magic-text">My Pet Projects</h2>
    </div>

    <div class="wrapper">
        <?php $cardList = require_once 'source/php/cards.php' ?>
        <?php foreach ( $cardList as $card ) : ?>
            <?php
            $title = $card['title'] ?? 'No Title';
            $description = $card['description'] ?? '';
            $frontImage = $card['front_image'] ?? null;
            $frontColor = $card['front_color'] ?? null;
            $backImage = $card['back_image'] ?? null;
            $backColor = $card['back_color'] ?? null;
            $link = $card['link'] ?? null;
            ?>
        <div class="card">
            <div class="content">
                <div class="front"
                     <?php if ( $frontImage ) : ?>
                     style="background-image: url(<?= $frontImage ?>)"
                     <?php elseif ( $frontColor ) : ?>
                     style="background-color: <?= $frontColor ?>"
                    <?php endif ?>
                >
                    <div class="inner">
                        <h3><?= $title ?></h3>
                    </div>
                </div>

                <div class="back"
                     <?php if ( $frontImage ) : ?>
                     style="background-image: url(<?= $backImage ?>)"
                     <?php elseif ( $frontColor ) : ?>
                     style="background-color: <?= $backColor ?>"
                    <?php endif ?>
                >
                    <div class="inner">
                        <h3 class="magic-text"><?= $title ?></h3>

                        <div class="description">
                                <?= $description ?>
                        </div>

                            <?php if ( $link ) : ?>
                        <a class="go clip-8 bg-light bg-white-hover" href="<?= $link ?>" target="_blank">Try It!</a>
                        <?php endif ?>
                    </div>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>
 */?>

    <section id="BIO" class="bio dark-side yellow-dots-before">
        <div class="label">
            <h2 class="magic-text">About Me</h2>
        </div>

        <div class="wrapper">
            <div class="focus-box c-white readable">
                <?php
                $year = (new DateTime())->format('Y');
                $experience = $year - 2017;
                $commercialExperience = $year - 2019;
                ?>
                <p>
                    I’m a backend developer with <?= $experience ?> years of
                    development experience, <?= $commercialExperience ?> of which are
                    commercial development experience. I have
                    extensive experience in developing WEB and
                    desktop applications. Every day I discover
                    something new for myself.
                </p>
                <p>
                    I have experience in developing web
                    applications on Laravel and Lumen. Participated in
                    the development of online stores as a technical
                    leader and was responsible for both the architecture
                    and the quality of the source code. I have
                    experience checking someone else's code, I know
                    how to read it and delve into its essence. In my free
                    time I sometimes work on my pet projects.
                </p>
                <p>
                    In the nearest feature I want to learn how to develop
                    hi-load applications.
                </p>
            </div>
        </div>
    </section>

    <section class="footer dark-side c-light">
        <div class="wrap">
            <p>
                Andrey Stseniayev - Software Engineer
            </p>

            <p>
                {{ (new DateTime())->format('Y') }}
            </p>
        </div>
    </section>
@endsection
