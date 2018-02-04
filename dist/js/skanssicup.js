/* global my */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i18n, theMap, theMapElement, theMarker, 
        //theMail = 'skanssicup<span style="display: none">some</span>&#0040;at&#0041;<span class="my-hidden">more</span>' + 'gmail.com',
        theMail = 'turunpalloseura05@gmail.com',
        skanssicup = {
        },
        sponsorLinks,
	rules = '';
    skanssicup.DATE = '28.4.2018';
    skanssicup.DAY_OF_WEEK = 'lauantai';
    skanssicup.TIME = '9:00';
    skanssicup.MAIL = theMail;
    skanssicup.ADDRESS = 'Karhunkatu 1, Turku'
    skanssicup.MAP_LINK = 'https://www.google.fi/maps/place/Poropuiston+jalkapallokentt%C3%A4,+Turku/@60.4311879,22.3352642,15z/data=!4m5!3m4!1s0x0:0x467d77aa2e01e0f2!8m2!3d60.4311879!4d22.3352642';
    skanssicup.MAP_LAT = 60.4311879;
    skanssicup.MAP_LNG = 22.3352642;


skanssicup.localization = {
        SUPPORTED: ['fi_FI', "en_GB", "sv_SE"],
        DEFAULT: 'fi_FI',
        ERRORS: {
            ERROR_INFO: {
                fi_FI: 'Lomakkeella on <@= errorCount @> virhettä',
                sv_SE: 'Det finns <@= errorCount @> fel',
                en_GB: 'There is <@= errorCount @> errors',
                de_DE: 'Es gibt <@= errorCount @> Fehler'
            },
            OK_INFO: {
                fi_FI: 'Lomake on valmis lähetettäväksi',
                sv_SE: 'Formen är redo att skickas',
                en_GB: 'The form is ready to be sent',
                de_DE: 'Die Form ist zum Versand bereit'
            },
            //OK: [],
            OK: {
                fi_FI: 'OK',
                sv_SE: 'OK',
                en_GB: 'OK',
                de_DE: 'OK'
            },
            // used by any validator, something unexpected, propably validator defined incorrectly
            //INTERNAL_ERROR: ['validatorName', 'error'],
            INTERNAL_ERROR: {
                fi_FI: 'Jotain odottamatonta tapahtui, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">ilmoita virheestä</a>',
                sv_SE: 'Någonting gick fel, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">rapportera ett fel</a>',
                en_GB: 'Something went wrong, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">report a bug</a>',
                de_DE: 'Etwas stimmt nicht, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">melden Sie einen Fehler</a>'
            },
            // used by any validator, invalid paramters passed to validator
            //INVALID_PARAMETER: ['validatorName', 'parameterName', 'parameterValue'],
            INVALID_PARAMETER: {
                fi_FI: 'Jotain odottamatonta tapahtui, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">ilmoita virheestä</a>',
                sv_SE: 'Någonting gick fel, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">rapportera ett fel</a>',
                en_GB: 'Something went wrong, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">report a bug</a>',
                de_DE: 'Etwas stimmt nicht, <a href="#./SubmitBug/validatorName=<@=validatorName@>&error=<@=error@>">melden Sie einen Fehler</a>'
            },
            // REQUIRED ATTRIBUTES
            // used by: 'defined'
            //NOT_DEFINED: [],
            NOT_DEFINED: {
                fi_FI: 'Tämä on pakollinen tieto',
                sv_SE: 'Du måste fylla detta fält',
                en_GB: 'You have to fill this field',
                de_DE: 'Sie müssen dieses Feld ausfüllen'
            },
            // NUMBER ATTRIBUTES
            // used by: 'min', 'max'
            NOT_NUMBER: ['value'],
            // used by: 'min'
            TOO_SMALL: ['value', 'minAccepted'],
            // used by: 'max'
            TOO_LARGE: ['value', 'maxAccepted'],
            // TEXT ATTRIBUTES
            // used by: 'minLength'
            //TOO_SHORT: ['value', 'length', 'minAccepted'],
            TOO_SHORT: {
                fi_FI: 'Liian lyhyt arvo (vähimmäispituus on <@= minAccepted @> merkkiä)',
                sv_SE: 'För kort värde (det minsta accepterade värdet är <@= minAccepted @> tecken',
                en_GB: 'Too short value (the minimum accepted value is <@= minAccepted @> characters)',
                de_DE: 'Der Wert ist zu kurz (die minimale akzeptable Länge ist <@= minAccepted @> Zeichen)'
            },
            // used by: 'maxLength'
            //TOO_LONG: ['value', 'length', 'maxAccepted'],
            TOO_LONG: {
                fi_FI: 'Liian pitkä arvo (enimmäispituus on <@= maxAccepted @> merkkiä)',
                sv_SE: 'För länge värde (det största accepterade värdet är <@= maxAccepted @> tecken',
                en_GB: 'Too long value (the maximum accepted value is <@= maxAccepted @> characters)',
                de_DE: 'Der Wert ist zu lang (die maximal akzeptable Länge ist <@= maxAccepted @> Zeichen)'
             },
            // PATTERN ATTRIBUTES
            // used by: 'email'
            //INVALID_EMAIL: ['value'],
            INVALID_EMAIL: {
                fi_FI: 'Virheellinen sähköpostiosoite',
                sv_SE: 'Ogiltig e-postadress',
                en_GB: 'Invalid email',
                de_DE: 'Ungültige E-Mail-Adresse'
            },
            // used by: 'phone'
            //INVALID_PHONE: ['value'],
            // used by: 'password'
            //INVALID_PASSWORD_NO_UPPER: [],
            INVALID_PASSWORD_NO_UPPER: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            //INVALID_PASSWORD_NO_LOWER: [],
            INVALID_PASSWORD_NO_LOWER: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            //INVALID_PASSWORD_NO_NUMBER: [],
            INVALID_PASSWORD_NO_NUMBER: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            //INVALID_PASSWORD_NO_SPECIAL_CHARACTERS: [],
            INVALID_PASSWORD_NO_SPECIAL_CHARACTERS: {
                fi_FI: 'Virheellinen salasana: salasanan pitää sisältää vähintään iso (A-Z) ja pieni (a-z) kirjain, numero (0-9) ja erikoismerkki (esim. !"#¤%&)',
                sv_SE: 'Ogiltig lösenord: lösenrod måste innehålla en stor (A-Z) och liten (a-z) bokstav, ett antal (0-9) ja ett specialtecken (t.ex. !"#¤%&)',
                en_GB: 'Invalid password: password must contain at least one capital (A-Z) and lower case (a-z) letter, one number (0-9) and one special character (e.g. !"#¤%&)',
                de_DE: 'Ungültige Passwort: Passwort muß mindestens ein Kapital  Buchstaben(A-Z) und Kleinbuchstaben (a-z), eine Zahl (0-9) und ein Sonderzeichen enthalten'
            },
            // INSAME VALIDATION ERRORS:
            USERNAME_ALREADY_IN_USE: {
                fi_FI: 'Käyttäjätunnus on jo varattu. Ota yhteyttä asiakaspalveluumme mikäli epäilet väärinkäytöstä',
                sv_SE: '',
                en_GB: 'Username is already registered. Please contact our customer service if you someone is using your email.',
                de_DE: 'TODO'
                
            }
        },
        GLOBAL: {
            VALIDATING: {
                fi_FI: 'Tarkistetaan syötettäsi',
                en_GB: 'Checking your input',
                sv_SE: 'Valideras din input '
                
            },
            // MAIN
            MAIN_TITLE: {
                fi_FI: 'Skanssi Cup 2018',
                en_GB: 'Skanssi Cup 2018',
                sv_SE: 'Skanssi Cup 2018'
            },
            MAIN_WELCOME_TEXT: {
                fi_FI: 'Tervetuloa <a href="https://www.facebook.com/tpsP05/" target="_new">TPS P05 -joukkueen</a> järjestämän Skanssi Cup 2018:n kotisivuille!',
                en_GB: 'Welcome to Skanssi Cup 2018 homepage!',
                sv_SE: 'Välkommen till Skanssi Cup 2018 hemsidan!'
            },
            MENU_TITLE: {
                fi_FI: 'Skanssi Cup 2018',
                en_GB: 'Skanssi Cup 2018',
                sv_SE: 'Skanssi Cup 2018'
            },
            MENU_ADMIN: {
                fi_FI: 'Ylläpito',
                en_GB: 'Administration',
                sv_SE: 'Admin'
            },
            MENU_MAIN: {
                fi_FI: 'Pääsivu',
                en_GB: 'Main',
                sv_SE: 'Hemsidan'
            },
            MENU_ABOUT: {
                fi_FI: 'Tietoja',
                en_GB: 'Information',
                sv_SE: 'Information'
            },
            MENU_REGISTRATION: {
                fi_FI: 'Palaute',
                en_GB: 'Registration/feedback',
                sv_SE: 'Registrering/återkoppling'
            },
            ABOUT_REGISTRATION: {
                fi_FI: 'HUOM! Kilpasarja ja haastajasarja ovat jo täynnä.',
                en_GB: 'Registration/feedback',
                sv_SE: 'Registrering/återkoppling'
            },
            MENU_RESULTS: {
                fi_FI: 'Tulokset',
                en_GB: 'Results',
                sv_SE: 'Resultat'
            },
            MENU_RESULTS_COMPETITION: {
                fi_FI: 'F8 Kilpasarja',
                en_GB: 'F8 Kilpasarja',
                sv_SE: 'F8 Kilpasarja'
            },
            MENU_RESULTS_CHALLENGE: {
                fi_FI: 'F8 Haastesarja',
                en_GB: 'F8 Haastesarja',
                sv_SE: 'F8 Haastesarja'
            },
            MENU_SPONSORS: {
                fi_FI: 'Yhteistyökumppanit',
                en_GB: 'Yhteistyökumppanit',
                sv_SE: 'Yhteistyökumppanit'
            },
            HEADING_ABOUT_TOURNAMENT: {
                fi_FI: 'Turnaus',
                en_GB: 'Tournament',
                sv_SE: 'Turnering'
            },
            CONTENT_ABOUT_TOURNAMENT: {
                fi_FI: 'Turnauksessa on kaksi eri tasoista sarjaa 2005 syntyneille pojille (F9): kilpasarja ja haastajasarja.',
                en_GB: 'There are two different levels of series for boys born on 2005: challenge and competition series.',
                sv_SE: 'Det finns två olika nivå för pojkar födda 2005: motionsserie och tävlningsserie.'
            },
            HEADING_ABOUT_SCHEDULE: {
                fi_FI: 'Aikataulu',
                en_GB: 'Schedule',
                sv_SE: 'Schema'
            },
            HEADING_ABOUT_LOCATION: {
                fi_FI: 'Sijainti',
                en_GB: 'Location',
                sv_SE: 'Läge'
            },
            HEADING_ABOUT_MAP: {
                fi_FI: 'Kartta ja ajo-ohjeet',
                en_GB: 'Map and driving instructions',
                sv_SE: 'Karta och körinstruktioner'
            },
            CONTENT_ABOUT_MAPLINK: {
                fi_FI: 'Ajo-ohjeet saat Google Mapsista',
                en_GB: 'Driving instructions can be found from Google Maps',
                sv_SE: 'Körinstruktioner finns i Google Maps'
                
            },
            HEADING_ABOUT_RULES: {
                fi_FI: 'Turnauksen säännöt',
                en_GB: 'Rules for the tournament',
                sv_SE: 'TODO'
            },
            CONTENT_ABOUT_RULES: {
                fi_FI: rules,
                en_GB: rules,
                sv_SE: rules
            },
            HEADING_ABOUT_ELITE: {
                fi_FI: 'Kilpasarjaan ilmoittautuneet',
                en_GB: 'Registrations for competition series',
                sv_SE: 'Registrerings för tävlningsserie'
            },
            CONTENT_ABOUT_ELITE: {
                fi_FI: 'TPS F9',
                en_GB: 'TPS F9',
                sv_SE: 'TPS F9'
                
            },
            HEADING_ABOUT_CHALLENGE: {
                fi_FI: 'Haastajasarjaan ilmoittautuneet',
                en_GB: 'Registrations for challenge series',
                sv_SE: 'Registrerings för motionsserie'
            },
            CONTENT_ABOUT_CHALLENGE: {
                fi_FI: 'TPS F9 valkoinen',
                en_GB: 'TPS F9 white',
                sv_SE: 'TPS F9 vit'
                
            },
            /*
             *                 //            matchCount: 'getResultTableAttribute',//MP matches played
            winCount: 'getResultTableAttribute',// W wins
            drawCount: 'getResultTableAttribute', // D draws
            looseCount: 'getResultTableAttribute', // L losses
            goalsFor: 'getResultTableAttribute',// F Goals for
            goalsAgainst: 'getResultTableAttribute',// A Goals against
            goalDifference: 'getResultTableAttribute',// D Goal difference
            points: 'getResultTableAttribute' //P points
                <th class="my-LocalizedTitle" code="RESULT_TABLE_TEAM"><span class="my-Localized" code="RESULT_TABLE_TEAM"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_MATCHES_PLAYED"><span class="my-Localized" code="RESULT_TABLE_MP"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_WINS"><span class="my-Localized" code="RESULT_TABLE_MW"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_DRAWS"><span class="my-Localized" code="RESULT_TABLE_MD"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_LOSSES"><span class="my-Localized" code="RESULT_TABLE_ML"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_GOALS_FOR"><span class="my-Localized" code="RESULT_TABLE_GF"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_GOALS_AGAINST"><span class="my-Localized" code="RESULT_TABLE_GA"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_GOAL_DIFFERENCE"><span class="my-Localized" code="RESULT_TABLE_GD"></span></th>
                <th class="my-LocalizedTitle" code="RESULT_TABLE_POINTS"><span class="my-Localized" code="RESULT_TABLE_P"></span></th>

            */
            RESULT_TABLE_TEAM: {
                fi_FI: 'Joukkue',
                en_GB: 'Team',
                se_SV: 'Lag'
            },
            RESULT_TABLE_MATCHES_PLAYED: {
                fi_FI: 'Otteluita',
                en_GB: 'Matches played',
                se_SV: 'Spelade matcher'
            },
            RESULT_TABLE_MP: {
                fi_FI: 'O',
                en_GB: 'MP',
                se_SV: 'S'
            },
            RESULT_TABLE_WINS: {
                fi_FI: 'Voittoja',
                en_GB: 'Wins',
                se_SV: 'Vunna matcher'
            },
            RESULT_TABLE_MW: {
                fi_FI: 'V',
                en_GB: 'W',
                se_SV: 'V'
            },
            RESULT_TABLE_DRAWS: {
                fi_FI: 'Tasapelejä',
                en_GB: 'Draws',
                se_SV: 'Oavgjorda matcher'
            },
            RESULT_TABLE_MD: {
                fi_FI: 'T',
                en_GB: 'D',
                se_SV: 'O'
            },
            RESULT_TABLE_LOSSES: {
                fi_FI: 'Häviöitä',
                en_GB: 'Losses',
                se_SV: 'Förlorade matcher'
            },
            RESULT_TABLE_ML: {
                fi_FI: 'H',
                en_GB: 'L',
                se_SV: 'F'
            },
            RESULT_TABLE_GOALS_FOR: {
                fi_FI: 'Tehdyt maalit',
                en_GB: 'Goals for',
                se_SV: 'Gjorda mål'
            },
            RESULT_TABLE_GF: {
                fi_FI: 'TM',
                en_GB: 'F',
                se_SV: 'GM'
            },
            RESULT_TABLE_GOALS_AGAINST: {
                fi_FI: 'Päästetyt maalit',
                en_GB: 'Goals against',
                se_SV: 'Insläppta mål'
            },
            RESULT_TABLE_GA: {
                fi_FI: 'PM',
                en_GB: 'A',
                se_SV: 'IM'
            },
            RESULT_TABLE_GOAL_DIFFERENCE: {
                fi_FI: 'Maaliero',
                en_GB: 'Goal difference',
                se_SV: 'Difference'
            },
            RESULT_TABLE_GD: {
                fi_FI: 'ME',
                en_GB: 'D',
                se_SV: 'D'
            },
            RESULT_TABLE_POINTS: {
                fi_FI: 'Pisteet',
                en_GB: 'Points',
                se_SV: 'Poäng'
            },
            RESULT_TABLE_P: {
                fi_FI: 'P',
                en_GB: 'P',
                se_SV: 'P'
            },
           //S = Spelade matcher, V = Vunna matcher, O = Oavgjorda matcher, F = Förlorade matcher, GM = Gjorda mål, IM = Insläppta mål, D = Differens, P = Poäng
            
            
            MESSAGE_TYPE_REGISTER_ELITE: {
                fi_FI: 'Ilmoittaudu F9 kilpasarjaan',
                en_GB: 'Register to competition series',
                sv_SE: 'Registrera till tävlingsserie'
            },
            MESSAGE_TYPE_REGISTER_CHALLENGE: {
                fi_FI: 'Ilmoittaudu F9 haastajasarjaan',
                en_GB: 'Register to challenge series',
                sv_SE: 'Registrera till motionsserie'
            },
            MESSAGE_TYPE_QUESTION_OR_FEEDBACK: {
                fi_FI: 'Kysymys tai palaute',
                en_GB: 'Question or feedback',
                sv_SE: 'Frågan eller återkoppling'
            },
            MESSAGE_TYPE: {
                fi_FI: 'Viestin tyyppi',
                en_GB: 'Message type',
                sv_SE: 'Meddelande typ'
            },
            HERE_WE_PLAY: {
                fi_FI: 'Täällä pelataan!',
                en_GB: 'Here we play!',
                sv_SE: 'Här spelar vi!'
            },
            SEND: {
                fi_FI: 'Lähetä',
                sv_SE: 'Skicka ',
                en_GB: 'Send'
            },
            CLOSE: {
                fi_FI: 'Sulje',
                sv_SE: 'Stäng',
                en_GB: 'Close'
            },
            MAIL_ADDRESS: {
                fi_FI: theMail,
                sv_SE: theMail,
                en_GB: theMail
            },
            SENDING_MAIL: {
                fi_FI: 'Viestiäsi lähetetään...',
                sv_SE: 'Ditt meddelande skickas...',
                en_GB: 'Sending your message...',
                de_DE: 'TODO'
            },
            MAIL_SENT: {
                fi_FI: 'Kiitos viestistäsi!',
                sv_SE: 'Tack för ditt meddelande!',
                en_GB: 'Thank you for your message!',
                de_DE: 'TODO'
            },
            MAIL_SEND_FAILED: {
                fi_FI: 'Viestin lähetys epäonnistui! Lähetä ilmoittautumisesi/viestisi sähköpostitse osoitteeseen  ' + theMail,
                sv_SE: 'Ditt meddelande skickades inte! Skicka ditt meddelande/återkoppling till e-post addresse ' + theMail,
                en_GB: 'Sending message failed! Please send your registration/feedback to ' + theMail,
                de_DE: 'TODO'
           }
        }
    };
    i18n = skanssicup.localization.GLOBAL;
    skanssicup.consts = {
        MESSAGE_TYPE: new my.Enumeration([
           {id: 1, label: i18n.MESSAGE_TYPE_REGISTER_ELITE, disabled: true},
           {id: 2, label: i18n.MESSAGE_TYPE_REGISTER_CHALLENGE, disabled: true},
           {id: 3, label: i18n.MESSAGE_TYPE_QUESTION_OR_FEEDBACK, defaultValue: true}
        ])
    };
    _.extend(my.localization, skanssicup.localization);
    skanssicup.model = {
        Contact: my.model.Model.extend({
            name: 'Contact',
            url: 'N/A',
            attributeTypes: {
                message: my.model.ATTRIBUTE_TYPES.TEXTAREA,
                messageType: my.model.ATTRIBUTE_TYPES.ENUMERATION
            },
            enumerationConfig: {
                messageType: {enumeration: skanssicup.consts.MESSAGE_TYPE}
            },
            validators: {
                email: [
                    'defined',
                    'email'
                ],
                team: [
                    'defined',
                    new my.validation.ValidatorInfo('length', {minAccepted: 2, maxAccepted: 4000})
                ],
                message: [
                    'defined',
                    new my.validation.ValidatorInfo('length', {minAccepted: 2, maxAccepted: 4000})
                ]
            },
            editableAttributes: ['name', 'team', 'email', 'message', 'messageType'],
            getMail: function (linebreak) {
                var br;
                if (typeof linebreak === 'undefined') {
                    br = '<br>';
                } else {
                    br = linebreak;
                }
                return "Moi Rami," + br + br + "Ilmoittautuminen/palaute osoitteesta skanssicup.myweb.fi" + br + br + "Viestin tyyppi:" +this.getText('messageType', 'fi_FI') + br + br + "Yhteyshenkilö: " + this.get('name') + " (" + this.get('email') + ")" + br + br + "Joukkue: " + this.get('team') + "" + br + br + "Viesti:" + br + "" + this.get("message")  + br + br + "t. Harri" + br;
            },
            getMailAsText: function () {
                return this.getMail('\n');
            },
            save: function () {
                var me = this;
                my.log('Sending contact:' + this.getMail());
                my.mail.send(this.getMail(), this.getMailAsText(), this.get('email') || 'no-reply@myweb.fi', this.get('name') || '',function() {
                    my.log('Mail sent');
                    me.trigger('sync', me, true);
                },
                function () {
                    my.log('Mail sent failed');
                    me.trigger('sync', me, false);
                },
                window
                );
            }
        })
    };
    
    skanssicup.view = {
        /*
            -- MENU STRUCTURE --
            - MAIN
            - ABOUT
            - REGISTRATION
            - RESULTS
                - COMPETITION
                - HOBBY
        */
        // declare your namespace here
        MenuView: my.view.MenuView.extend({
            name: 'Menu',
            title: '',
            onUserUpdated: function () {
                var user = my.app.getUserPrincipal();
                my.log('User updated: ' + user.get('username'));
                this.render();
            }
        }),
        AboutView: my.view.View.extend({
            name: 'About',
            title: skanssicup.localization.GLOBAL.MENU_ABOUT,
            events: {
                'click .skanssicup-AboutView-Directions': 'showDirections'
            },
            showDirections: function () {
                window.alert('Ohjeet: ' + this.$el.find('.skanssicup-AboutView-WhereFrom').val());
            },
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                var location, mapOptions, lat, lng, google = window.google;
                lat = skanssicup.MAP_LAT;
                lng = skanssicup.MAP_LNG;

                    if (typeof theMap === 'undefined') {
                    //http://code.google.com/p/gmaps-api-issues/issues/detail?id=3803
                    if (google) {
                        location = new google.maps.LatLng(lat, lng);
                        mapOptions = {
                            center: location,
                            zoom: 12
                        };
                        theMapElement = this.$el.find('.skanssicup-AboutView-GoogleMap');
                        theMap = new google.maps.Map(theMapElement.get(0), mapOptions);
                        theMarker = new google.maps.Marker({
                            position: location,
                            map: theMap,
                            title: i18n.HERE_WE_PLAY[my.app.getCurrentLocale()]
                        });
                    }
                } else {
                    this.$el.find('.skanssicup-AboutView-GoogleMap').replaceWith(theMapElement);
                    theMarker.setTitle(i18n.HERE_WE_PLAY[my.app.getCurrentLocale()]);
                }
                
                this.$el.find('a.skanssicup-AboutView-GoogleMapLink').attr('href', '//maps.google.com/?q=' + lat + ',' + lng);
            },
            remove: function () {
                my.log('remove map, no keep it due to a bug in google maps js api');
                // removing map should be done by removing the element? 
                my.view.View.prototype.remove.apply(this, arguments);
            }
        }),
        MainView: my.view.View.extend({
            name: 'Main',
            title: skanssicup.localization.GLOBAL.MENU_MAIN,
            defaultView: true
        }),
        MatchListView: my.view.View.extend({
            attributeNames: ['homeTeamId', 'visitorTeamId', 'complete', 'includeInResultTable', 'homeTeamDescription','visitorTeamDescription', 'time', 'homeTeamName','visitorTeamName', 'homeGoals', 'visitorGoals'],
            name: 'MatchList',
            tagName: 'tr',
            initialize: function () {
                my.view.View.prototype.initialize.apply(this, arguments);
                this.model.on('change:complete', this.onCompleteChange, this);
            },
            remove: function () {
                my.view.View.prototype.remove.apply(this, arguments);
                this.model.off('change:complete', this.onCompleteChange, this);
            },
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                this.onCompleteChange();
            },
            onCompleteChange: function () {
                if (this.model.get('complete')) {
                    this.$el.find('.skanssicup-MatchListView-Match-homeGoals').show();
                    this.$el.find('.skanssicup-MatchListView-Match-visitorGoals').show();
                } else {
                    this.$el.find('.skanssicup-MatchListView-Match-homeGoals').hide();
                    this.$el.find('.skanssicup-MatchListView-Match-visitorGoals').hide();
                    
                }
            },
            events: {
                'click .skanssicup-MatchListView-remove': 'removeMatch'
            },
            removeMatch: function () {
                this.model.remove();
            }
        }),
        TournamentView: my.view.View.extend({
            name: 'Tournament',
            tagName: 'tr',
            events: {
                'click .skanssicup-TournamentView-save': 'save'
            },
            save: function () {
                this.model.save({}, {now: new Date().getTime(), success: function () {
                        my.eventBus.trigger('message', 'Saved successfully');
                    },
                    error: function () {
                        my.eventBus.trigger('message', 'Saving failed');
                    }
                });
            },
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                _.each(this.model.getChildCollection('Team').models, function (team) {
                    this.addModel(team, ['name', 'background'], {SubView: skanssicup.view.ResultTableTeamView});
                }, this);
                _.each(this.model.getChildCollection('Match').models, function (match) {
                    this.addModel(match, skanssicup.view.MatchListView.prototype.attributeNames, {SubView: skanssicup.view.MatchListView});
                }, this);
            }
        }),
        RoundListView: my.view.View.extend({
            name: 'RoundList',
            tagName: 'tr',
            render: function () {
                my.view.View.prototype.render.apply(this, arguments);
                _.each(this.model.getMatches(), function (match) {
                    this.addModel(match, ['homeTeamId', 'visitorTeamId'], {SubView: skanssicup.view.MatchListView, readonly: true});
                }, this);
                
            }
        }),
        ResultTableTeamView: my.view.View.extend({
            name: 'ResultTableTeam',
            tagName: 'tr'
        }),
        SponsorsView: my.view.View.extend({
            name: 'Sponsors',
            title: skanssicup.localization.GLOBAL.MENU_SPONSORS,
        }),
        ResultsCompetitionView: my.view.View.extend({
            name: 'ResultsCompetition',
            title: skanssicup.localization.GLOBAL.MENU_RESULTS_COMPETITION,
        }),
        ResultsChallengeView: my.view.View.extend({
            name: 'ResultsChallenge',
            title: skanssicup.localization.GLOBAL.MENU_RESULTS_CHALLENGE,
        }),
        TweetsView: my.view.View.extend({
            name: 'Tweets',
            render: function () {
                jQuery('#my-tweets .skanssicup-TweetsView-readonly').removeClass('my-hidden');
            },
            remove: function () {
                jQuery('#my-tweets .skanssicup-TweetsView-readonly').addClass('my-hidden');
                my.view.View.prototype.remove.apply(this, arguments);
            }
        })
    };
    /*
    skanssicup.view.TweetsOnlineView = skanssicup.view.OnlineView.extend({
        name: 'TweetsOnline',
        title: 'Twiitit',
        defaultNavi:  [
            {name: 'Main', time: 10000},
            {name: 'Tweets', time: 20000, options: {readonly: true}}
        ]
    });
    */
    my.app.registerView(skanssicup.view.MenuView);
    my.app.registerView(skanssicup.view.AboutView);
    my.app.registerView(skanssicup.view.MainView);
    my.app.registerView(skanssicup.view.ResultsCompetitionView);
    my.app.registerView(skanssicup.view.ResultsChallengeView);
    my.app.registerView(skanssicup.view.TweetsView);
    my.app.registerView(skanssicup.view.SponsorsView);
//    my.app.registerView(skanssicup.view.LandingView);


    my.eventBus.trigger('event', 'All views registered, initializing map...');
    jQuery(function () {
            my.app.start({
                templatesPath: 'templates.html',
                templateIdPrefix: 'skanssicup-',
                templateIdPostfix: 'View',
                userPath: 'data.php',
                loginPath: 'login.php',
                logoutPath: 'logout.php',
                emailerPath: 'API/Emailer.php',
                GoogleAnalyticsTrackingCode: 'UA-42886058-2',
                GoogleAnalyticsCreateOptions: {cookieDomain: 'tulostaulu.com'}//'myweb.fi';

            });
            
    });

