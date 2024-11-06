I. Wymagania niefunkcjonalne


1. Wydajność
 
Szybkość ładowania: Aplikacja powinna ładować dane szybko, tak aby użytkownicy mogli natychmiast zobaczyć wyniki meczów na żywo. 
Małe zużycie danych: Ze względu na częste aktualizacje, aplikacja powinna być zoptymalizowana pod kątem minimalnego zużycia danych, co jest kluczowe zwłaszcza przy korzystaniu z sieci mobilnych.
 
 
2. Skalowalność
 
Obsługa dużej liczby użytkowników: Aplikacja powinna być przygotowana na jednoczesny dostęp setek tysięcy użytkowników, szczególnie w czasie dużych wydarzeń sportowych.
Dynamiczne skalowanie: Architektura aplikacji powinna być skalowalna i przygotowana do automatycznego dostosowania zasobów w zależności od obciążenia.
 
 
3. Niezawodność i dostępność

Wysoka dostępność: Aplikacja powinna być dostępna 24/7, z minimalnymi przerwami technicznymi.
Mechanizmy awaryjne: Powinny być wprowadzone mechanizmy redundancji i odtwarzania po awarii, aby zapewnić ciągłość działania, np. w przypadku awarii serwera.
Częste aktualizacje: System powinien być aktualizowany w czasie rzeczywistym, aby wyniki były zawsze aktualne.
 
4. Użyteczność i dostępność
 
Intuicyjny interfejs: Aplikacja powinna być prosta w obsłudze, z przejrzystym i przyjaznym interfejsem użytkownika.


II. Wymagania funkcjonalne


 1. Wyniki na żywo (opcjonalne)
 
Aktualizacja wyników w czasie rzeczywistym: Aplikacja musi automatycznie aktualizować wyniki meczów w czasie rzeczywistym, bez potrzeby ręcznego odświeżania.
 
 2. Kalendarz wydarzeń i terminarz
 
Przegląd wydarzeń sportowych: Użytkownicy mogą przeglądać planowane wydarzenia sportowe, zarówno dzisiejsze, jak i przyszłe, z podziałem na dni, ligi, turnieje czy dyscypliny sportowe.
Historia wyników: Możliwość przeglądania zakończonych wydarzeń oraz wyników archiwalnych. 
Sortowanie i filtrowanie wydarzeń: Możliwość filtrowania wydarzeń według ligi, zespołu, daty, rodzaju sportu itp.
 
 3. Wyniki i statystyki
 
Szczegółowe statystyki: Dostęp do różnych statystyk, takich jak liczba strzałów, fauli, posiadanie piłki, rożne, rzuty karne i inne istotne dane. 
Tabele ligowe i klasyfikacje: Aktualne tabele ligowe, klasyfikacje strzelców i rankingi drużyn w czasie rzeczywistym.
 
 4. Wyszukiwanie i nawigacja
 
Wyszukiwarka: Możliwość wyszukiwania drużyn, zawodników, lig i wydarzeń według słów kluczowych.
Łatwa nawigacja: Intuicyjna struktura nawigacji, umożliwiająca szybkie przechodzenie pomiędzy stronami z wynikami, statystykami, tabelami i innymi zasobami.


III. Potencjalne ryzyka


Brak doświadczenia z JavaScript: Zespół może napotkać trudności w tworzeniu bazy danych w JavaScript.
Nowa technologia: Konieczność nauki nowej technologii może spowodować opóźnienia.


IV. Lista Zadań


1. Analiza i planowanie projektu
 
Zdefiniowanie celów i głównych funkcjonalności aplikacji.
Analiza wymagań funkcjonalnych i niefunkcjonalnych.
 
2. Projektowanie architektury systemu
 
Zdefiniowanie architektury backendu i frontend.
Wybór technologii oraz narzędzi do rozwoju.
Projektowanie struktury baz danych oraz modelu danych.
Integracja z zewnętrznymi źródłami danych (np. dostawcami wyników sportowych).
 
3. Rozwój frontendu
 
Implementacja interfejsu użytkownika na podstawie projektu UI.
Integracja z backendem i API.
Implementacja kluczowych funkcji takich jak aktualizacja wyników, tabela ligowa, relacje na żywo itp.
  
4. Optymalizacja
 
Optymalizacja zapytań do bazy danych i API, aby przyspieszyć ładowanie danych. 
Dostosowanie do urządzeń o różnych specyfikacjach, aby zapewnić kompatybilność z szeroką gamą urządzeń.


V. Diagram strony


Użytkownik
     -
     >
Interfejs użytkownika
(Strona webowa)
     -
     >
Strona serwerowa
     -
     >
Serwer bazy danych

Opis diagramu
 
1. Użytkownik – Użytkownik korzysta z interfejsu strony internetowej. Wprowadza swoje akcje, np. przeglądanie wyników, wybranie ulubionej drużyny, etc.
 
 
2. Interfejs użytkownika – Jest to część strony, która jest widoczna dla użytkownika. Może to być przeglądarka.
 
 
3. Strona serwerowa (Backend) – Otrzymuje żądania od strony (np. zapytania o wyniki meczów) i przetwarza je. Backend komunikuje się z serwerem bazy danych, aby uzyskać potrzebne informacje.
 
 
4. Serwer bazy danych – Przechowuje wszystkie dane, takie jak wyniki meczów, profile użytkowników, statystyki itp. Odpowiada na zapytania strony serwerowej, która następnie przesyła wyniki z powrotem do interfejsu użytkownika.











 
