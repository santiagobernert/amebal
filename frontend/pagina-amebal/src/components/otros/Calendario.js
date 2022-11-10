import React from "react";
import styles from "../../styles/otros/calendario/Calendario.module.css";

import { Container, Table } from "react-bootstrap";

export default function Calendario() {
  return (
    <div>
      <Container className={styles.container}>
        <div className={styles.calendar}>
          <header>
            <h2>Noviembre 2022</h2>
            <a className={styles.btn_prev} href="#"></a> 
            <a className={styles.btn_next} href="#"></a>
          </header>
          <Table>
            <thead>
              <tr>
                <td>L</td>
                <td>M</td>
                <td>M</td>
                <td>J</td>
                <td>V</td>
                <td>S</td>
                <td>D</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.prev_month}>26</td>
                <td className={styles.prev_month}>27</td>
                <td className={styles.prev_month}>28</td>
                <td className={styles.prev_month}>29</td>
                <td className={styles.prev_month}>30</td>
                <td className={styles.prev_month}>31</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
              </tr>
              <tr>
                <td>9</td>
                <td className={styles.event}>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
              </tr>
              <tr>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td className={styles.event}>21</td>
                <td>22</td>
              </tr>
              <tr>
                <td className={`${styles.current_day} ${styles.event}`}>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
              </tr>
              <tr>
                <td>30</td>
                <td className={styles.next_month}>1</td>
                <td className={styles.next_month}>2</td>
                <td className={styles.next_month}>3</td>
                <td className={styles.next_month}>4</td>
                <td className={styles.next_month}>5</td>
                <td className={styles.next_month}>6</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
