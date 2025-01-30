import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/standings.css"; // Import the CSS file

function Standings() {
  return (
    <div>
      {/* Header */}
      <div className="header">Rookie Review - League Table</div>

      {/* Table Container */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>F</th>
              <th>A</th>
              <th>GD</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="team-name">Liverpool</td>
              <td>11</td><td>9</td><td>1</td><td>1</td><td>21</td><td>6</td><td className="gd-positive">15</td><td>28</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="team-name">Manchester City</td>
              <td>11</td><td>7</td><td>2</td><td>2</td><td>22</td><td>13</td><td className="gd-positive">9</td><td>23</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="team-name">Chelsea</td>
              <td>11</td><td>5</td><td>4</td><td>2</td><td>21</td><td>13</td><td className="gd-positive">8</td><td>19</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="team-name">Arsenal</td>
              <td>11</td><td>5</td><td>4</td><td>2</td><td>18</td><td>12</td><td className="gd-positive">6</td><td>19</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="team-name">Nottingham Forest</td>
              <td>11</td><td>5</td><td>4</td><td>2</td><td>15</td><td>10</td><td className="gd-positive">5</td><td>19</td>
            </tr>
            <tr>
              <td>6</td>
              <td className="team-name">Brighton</td>
              <td>11</td><td>5</td><td>4</td><td>2</td><td>19</td><td>15</td><td className="gd-positive">4</td><td>19</td>
            </tr>
            <tr>
              <td>7</td>
              <td className="team-name">Fulham</td>
              <td>11</td><td>5</td><td>3</td><td>3</td><td>16</td><td>13</td><td className="gd-positive">3</td><td>18</td>
            </tr>
            <tr>
              <td>8</td>
              <td className="team-name">Newcastle United</td>
              <td>11</td><td>5</td><td>3</td><td>3</td><td>13</td><td>11</td><td className="gd-positive">2</td><td>18</td>
            </tr>
            <tr>
              <td>9</td>
              <td className="team-name">Aston Villa</td>
              <td>11</td><td>5</td><td>3</td><td>3</td><td>17</td><td>17</td><td>0</td><td>18</td>
            </tr>
            <tr>
              <td>10</td>
              <td className="team-name">Tottenham Hotspur</td>
              <td>11</td><td>5</td><td>1</td><td>5</td><td>23</td><td>13</td><td className="gd-positive">10</td><td>16</td>
            </tr>
            {/* Additional rows for remaining teams up to 20 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Standings;
